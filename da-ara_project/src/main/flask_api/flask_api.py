from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def main_page():
    return 'Main Page'

@app.route('/api/data', methods=['GET'])
def get_data():
    data = {'name' : 'Alice', 'age' : '20'}
    print(data)
    return jsonify(data), 200

if __name__ == '__main__':
    app.run(debug=True)