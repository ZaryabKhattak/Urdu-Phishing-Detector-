# Urdu Phishing Detector

AI-powered web application for detecting phishing content in Urdu messages and texts. Built with React 18 and Vite, featuring a modern component architecture, real-time analysis, and seamless backend integration. Designed to protect Urdu-speaking users from cyber threats.

## Features

- 🔍 Real-time phishing detection for Urdu text
- 🤖 AI-powered analysis using machine learning
- 🌐 Modern React-based user interface
- ⚡ Fast and responsive with Vite
- 🔒 Secure backend API
- 📱 Mobile-friendly design

## Tech Stack

### Frontend
- React 18
- Vite
- Axios for API calls
- Modern CSS

### Backend
- Python Flask
- TensorFlow/Transformers for ML
- NumPy & Pandas for data processing
- scikit-learn for model training

## Getting Started

> **Quick Start:** For a rapid setup, check out the [QUICKSTART.md](QUICKSTART.md) guide!

### Prerequisites
- Node.js (v18 or higher)
- Python (v3.8 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ZaryabKhattak/Urdu-Phishing-Detector-.git
   cd Urdu-Phishing-Detector-
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   pip install -r requirements.txt
   cd ..
   ```

4. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running the Application

1. **Start the backend server**
   ```bash
   cd backend
   python app.py
   ```
   The backend will run on http://localhost:5000

2. **Start the frontend development server** (in a new terminal)
   ```bash
   npm run dev
   ```
   The frontend will run on http://localhost:3000

3. **Open your browser** and navigate to http://localhost:3000

## Project Structure

```
├── src/                    # Frontend source code
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components
│   ├── services/         # API services
│   ├── utils/            # Utility functions
│   ├── App.jsx           # Main App component
│   └── main.jsx          # Entry point
├── backend/               # Backend source code
│   ├── api/              # API routes
│   ├── models/           # ML models
│   ├── utils/            # Backend utilities
│   ├── app.py            # Flask application
│   └── requirements.txt  # Python dependencies
├── public/               # Static assets
├── index.html            # HTML template
├── vite.config.js        # Vite configuration
└── package.json          # Node dependencies

```

## Usage

1. Enter Urdu text in the text area
2. Click "Analyze Text" button
3. View the analysis results showing whether the text is potentially phishing content
4. The confidence score indicates the certainty of the prediction

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Security

If you discover a security vulnerability, please email the maintainers directly instead of opening a public issue.

## Acknowledgments

- Built to protect Urdu-speaking communities from phishing attacks
- Inspired by the need for language-specific security tools
- Thanks to all contributors who help improve this project

## Support

If you find this project helpful, please give it a ⭐ on GitHub!
