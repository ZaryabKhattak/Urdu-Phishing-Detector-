from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'message': 'Backend is running'})

@app.route('/api/analyze', methods=['POST'])
def analyze_text():
    """
    Analyze Urdu text for phishing detection
    
    Expected JSON payload:
    {
        "text": "Urdu text to analyze"
    }
    """
    try:
        data = request.get_json()
        text = data.get('text', '')
        
        if not text:
            return jsonify({'error': 'No text provided'}), 400
        
        # TODO: Implement phishing detection logic
        # This is a placeholder response
        result = {
            'text': text,
            'is_phishing': False,
            'confidence': 0.0,
            'message': 'Analysis not yet implemented'
        }
        
        return jsonify(result)
    
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
