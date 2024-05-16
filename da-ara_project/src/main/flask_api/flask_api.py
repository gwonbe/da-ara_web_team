from flask import Flask, jsonify, request
from flask_cors import CORS
from transformers import BlenderbotTokenizer, BlenderbotForConditionalGeneration

app = Flask(__name__)
CORS(app)

# Load the model and tokenizer
model_name = "facebook/blenderbot-400M-distill"
tokenizer = BlenderbotTokenizer.from_pretrained(model_name)
model = BlenderbotForConditionalGeneration.from_pretrained(model_name)

@app.route('/')
def main_page():
    return 'Main Page'

@app.route('/api/data', methods=['POST'])
def get_data():
    
    requestJson = request.json
    
    # Get input message from the request
    #input_message = request.args.get('message', default='what is yourname?', type=str)
    input_message = requestJson.get('userMessage', '')

    # Encode the input message
    input_ids = tokenizer(input_message, return_tensors="pt").input_ids

    # Generate response from the model
    response_ids = model.generate(input_ids)

    # Decode the response
    response_text = tokenizer.decode(response_ids[0], skip_special_tokens=True)

    # Prepare response data
    data = {'text': response_text}

    return jsonify(data), 200

if __name__ == '__main__':
    app.run(debug=True)
