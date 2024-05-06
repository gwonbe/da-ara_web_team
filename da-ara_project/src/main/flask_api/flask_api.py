from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def main_page():
    return 'Main Page'

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'text' : '안녕하세요. 저는 다아라입니다. 한림대에 대해서 무엇이든 물어보세요.', 'label' : '100'}
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(debug=True)