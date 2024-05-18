from flask import Flask, request, jsonify, render_template_string
from transformers import AutoModelForCausalLM, AutoTokenizer

# Flask 앱 생성
app = Flask(__name__)

model = AutoModelForCausalLM.from_pretrained("EUNHWA11/koalpaca_step_8000_hallym_DaAra")
tokenizer = AutoTokenizer.from_pretrained("beomi/KoAlpaca-Polyglot-5.8B")

@app.route('/')
def main_page():
    return 'Main Page'

# ask 함수 정의
def ask(x):
    input_ids = tokenizer(
        f"### 질문: {x}\n\n### 답변:",
        return_tensors='pt',
        return_token_type_ids=False
    )['input_ids'].to(model.device)

    gened = model.generate(
        input_ids,
        max_new_tokens=256,
        early_stopping=True,
        do_sample=False,
        eos_token_id=2,
    )
    decoded_text = tokenizer.decode(gened[0], skip_special_tokens=True)
    answer = decoded_text.split('###')[2]

    if '0000000000' in answer:
        answer = answer.split('0000000000')[0]

    return answer

# # HTML 템플릿
# html_template = '''
# <!DOCTYPE html>
# <html>
# <head>
#     <title>Ask a Question</title>
# </head>
# <body>
#     <h1>Ask a Question</h1>
#     <form action="/" method="post">
#         <label for="question">Question:</label>
#         <input type="text" id="question" name="question">
#         <input type="submit" value="Submit">
#     </form>
#     {% if answer %}
#     <h2>Answer:</h2>
#     <p>{{ answer }}</p>
#     {% endif %}
# </body>
# </html>
# '''

# 루트 엔드포인트 정의 (HTML 폼 제공)
@app.route('/api/data', methods=['POST'])
def get_data():
    # answer = None
    # if request.method == 'GET' or request.method == 'POST' or request.method == 'OPTIONS':
    #     #question = request.form['question']
    #     #requestJson = request.json
    #    # question = requestJson.get('userMessage', '')
        
    #     # question = '반가워'
    #     # answer = ask(question)
    #     # print(question)
    #     # print(answer)
    #     data = {'text' : answer}
    #     return jsonify(data), 200
    
    data = {'text' : '성공'}
    
    return jsonify(data), 200
    #return render_template_string(html_template, answer=answer)
    
    
# Flask 앱 실행
if __name__ == '__main__':
    app.run()
