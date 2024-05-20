from flask import Flask, request, jsonify
from transformers import AutoModelForCausalLM, AutoTokenizer
from flask_cors import CORS
import torch
import threading

# Flask 앱 생성
app = Flask(__name__)
CORS(app)

# 모델 및 토크나이저를 전역 변수로 설정
model = None
tokenizer = None

def load_model():
    global model, tokenizer
    try:
        model = AutoModelForCausalLM.from_pretrained("EUNHWA11/koalpaca_step_8000_hallym_DaAra")
        tokenizer = AutoTokenizer.from_pretrained("beomi/KoAlpaca-Polyglot-5.8B")
        print("모델 로딩 완료")
    except Exception as e:
        print(f"모델 로딩 중 오류 발생: {e}")

# 서버 시작 시 모델 로드
model_load_thread = threading.Thread(target=load_model)
model_load_thread.start()

# ask 함수 정의
def ask(question):
    if model is None or tokenizer is None:
        return "모델이 아직 로드되지 않았습니다. 잠시 후 다시 시도하세요."

    try:
        input_ids = tokenizer(
            f"### 질문: {question}\n\n### ",
            return_tensors='pt',
            return_token_type_ids=False
        )['input_ids'].to(model.device)

        # 어텐션 마스크 생성
        attention_mask = torch.ones_like(input_ids)

        gened = model.generate(
            input_ids,
            attention_mask=attention_mask,  # 어텐션 마스크 설정
            max_new_tokens=256,
            num_beams=2,  # num_beams 값을 조정
            early_stopping=False,  # early_stopping 플래그를 False로 설정
            do_sample=False,
            eos_token_id=2,
            pad_token_id=2,
        )
        decoded_text = tokenizer.decode(gened[0], skip_special_tokens=True)
        answer = decoded_text.split('###')[2].strip()

        if '0000000000' in answer:
            answer = answer.split('0000000000')[0].strip()
            
        # "답변:" 부분 제거
        if answer.startswith("답변:"):
            answer = answer[len("답변:"):].strip()
            
        # 개행 문자를 <br/>로 변경
        answer = answer.replace('\\n', '<br>')
            
        return answer
    except Exception as e:
        print(f"질문 처리 중 오류 발생: {e}")
        return "답변 생성 중 오류가 발생했습니다."

# 루트 엔드포인트 정의 (HTML 폼 제공)
@app.route('/')
def display():
    return "연결이 되었습니다."

# API 엔드포인트 정의
@app.route('/api', methods=['GET','POST'])
def api():
    content_type = request.headers.get('Content-Type')
    if not content_type or 'application/json' not in content_type:
        return jsonify({'text': 'Unsupported Media Type: Content-Type must be application/json'}), 415

    try:
        request_json = request.get_json()
        if request_json is None:
            raise ValueError("JSON 형식의 요청이 필요합니다.")

        question = request_json.get('userMessage', '').strip()
        if not question:
            raise ValueError("userMessage가 제공되지 않았습니다.")
        
        answer = ask(question)
        data = {'text': answer}
        return jsonify(data), 200
    except ValueError as ve:
        print(f"요청 오류: {ve}")
        return jsonify({'text': str(ve)}), 400
    except Exception as e:
        print(f"오류 발생: {e}")
        return jsonify({'text': '요청을 처리하는 중 오류가 발생했습니다.'}), 500

# 모델 로드 상태 확인 엔드포인트 정의
@app.route('/status', methods=['GET'])
def status():
    if model is None or tokenizer is None:
        return jsonify({'status': '모델 로딩 중'}), 503
    return jsonify({'status': '모델 로딩 완료'}), 200

# Flask 앱 실행
if __name__ == '__main__':
    app.run()