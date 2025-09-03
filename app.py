from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.json
    email_content = data.get("email", "")
    if not email_content:
        return jsonify({"error": "No email content provided"}), 400

    # Dummy analysis logic
    result = {
        "length": len(email_content),
        "word_count": len(email_content.split()),
        "is_spam": "spam" in email_content.lower()
    }
    return jsonify(result)

if __name__ == '__main__':
    app.run(debug=True)
