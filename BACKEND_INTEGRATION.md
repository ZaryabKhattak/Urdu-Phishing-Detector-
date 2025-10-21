# Backend Integration Guide

## Overview

This guide provides step-by-step instructions for integrating the frontend with the backend API and AI model for phishing detection.

## Table of Contents
- [Architecture Overview](#architecture-overview)
- [Prerequisites](#prerequisites)
- [Backend Requirements](#backend-requirements)
- [Integration Steps](#integration-steps)
- [API Endpoints](#api-endpoints)
- [Environment Setup](#environment-setup)
- [Testing](#testing)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## Architecture Overview

### Current Architecture (Mock API)
```
Frontend (React)
└── apiService.js (Mock responses with setTimeout)
```

### Target Architecture (Production)
```
Frontend (React)
├── apiService.js (Real API calls)
└── Backend Server
    ├── REST API (Express/FastAPI/Django)
    ├── AI Model (Python/TensorFlow/PyTorch)
    └── Database (Optional - for analytics)
```

---

## Prerequisites

### For Backend Developer (Sibghat Ullah)

#### Required Technologies
- **Python 3.8+** (recommended for AI/ML)
- **Framework Options:**
  - FastAPI (recommended - fast, modern, async)
  - Flask (lightweight, simple)
  - Django REST Framework (full-featured)

#### Required Libraries
```bash
# Core
fastapi>=0.104.0
uvicorn>=0.24.0
python-multipart>=0.0.6

# CORS (for frontend communication)
fastapi-cors>=0.0.6

# AI/ML
tensorflow>=2.14.0  # or pytorch
scikit-learn>=1.3.0
numpy>=1.24.0
pandas>=2.1.0

# Text Processing (for Urdu)
transformers>=4.35.0
torch>=2.1.0  # if using PyTorch-based models
```

#### Environment Setup
```bash
# Create virtual environment
python -m venv venv

# Activate (Windows)
venv\Scripts\activate

# Activate (Linux/Mac)
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

---

## Backend Requirements

### 1. API Server Structure

Recommended folder structure:
```
backend/
├── app/
│   ├── __init__.py
│   ├── main.py              # FastAPI app
│   ├── models/
│   │   ├── __init__.py
│   │   └── phishing_model.py   # AI model wrapper
│   ├── routes/
│   │   ├── __init__.py
│   │   ├── analyze.py          # Analysis endpoint
│   │   └── contact.py          # Contact endpoint
│   ├── schemas/
│   │   ├── __init__.py
│   │   ├── request.py          # Request models
│   │   └── response.py         # Response models
│   └── utils/
│       ├── __init__.py
│       └── preprocessing.py    # Text preprocessing
├── models/
│   └── urdu_phishing_model.h5  # Trained model file
├── requirements.txt
├── .env
└── README.md
```

### 2. Required API Endpoints

#### **POST /api/analyze**
Analyzes Urdu text for phishing patterns

**Request:**
```json
{
  "message": "آپ کا اکاؤنٹ بلاک ہو گیا ہے۔ یہاں کلک کریں"
}
```

**Response (Success):**
```json
{
  "classification": "SCAM",
  "confidence": 87.3,
  "details": "This message contains suspicious patterns commonly found in phishing attempts.",
  "timestamp": "2024-10-21T10:30:00Z"
}
```

**Response (Error):**
```json
{
  "error": "Invalid request",
  "message": "Message text is required",
  "timestamp": "2024-10-21T10:30:00Z"
}
```

#### **POST /api/contact** (Optional)
Handles contact form submissions

**Request:**
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "message": "Hello, I have a question..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

### 3. Sample Backend Code (FastAPI)

#### `main.py`
```python
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routes import analyze, contact
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(
    title="Urdu Phishing Detector API",
    description="AI-powered phishing detection for Urdu text",
    version="1.0.0"
)

# CORS configuration - IMPORTANT for frontend communication
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # Vite dev server
        "https://your-frontend-domain.com",  # Production domain
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include routers
app.include_router(analyze.router, prefix="/api", tags=["Analysis"])
app.include_router(contact.router, prefix="/api", tags=["Contact"])

@app.get("/")
async def root():
    return {
        "message": "Urdu Phishing Detector API",
        "version": "1.0.0",
        "status": "running"
    }

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

#### `routes/analyze.py`
```python
from fastapi import APIRouter, HTTPException
from app.schemas.request import AnalyzeRequest
from app.schemas.response import AnalyzeResponse
from app.models.phishing_model import PhishingDetector
from datetime import datetime

router = APIRouter()
detector = PhishingDetector()  # Initialize AI model

@router.post("/analyze", response_model=AnalyzeResponse)
async def analyze_message(request: AnalyzeRequest):
    """
    Analyze Urdu text message for phishing patterns
    """
    try:
        # Validate input
        if not request.message or len(request.message.strip()) == 0:
            raise HTTPException(
                status_code=400, 
                detail="Message cannot be empty"
            )
        
        # Run AI model prediction
        result = detector.predict(request.message)
        
        return AnalyzeResponse(
            classification=result["classification"],
            confidence=result["confidence"],
            details=result["details"],
            timestamp=datetime.utcnow().isoformat() + "Z"
        )
    
    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=f"Error analyzing message: {str(e)}"
        )
```

#### `models/phishing_model.py`
```python
import tensorflow as tf
import numpy as np
from typing import Dict

class PhishingDetector:
    def __init__(self, model_path: str = "models/urdu_phishing_model.h5"):
        """
        Initialize the phishing detection model
        """
        try:
            self.model = tf.keras.models.load_model(model_path)
            print(f"Model loaded successfully from {model_path}")
        except Exception as e:
            print(f"Error loading model: {e}")
            self.model = None
    
    def preprocess(self, text: str) -> np.ndarray:
        """
        Preprocess Urdu text for model input
        """
        # TODO: Implement your preprocessing logic
        # - Tokenization
        # - Vectorization
        # - Padding
        # - etc.
        pass
    
    def predict(self, text: str) -> Dict:
        """
        Predict if text is phishing or legitimate
        """
        if not self.model:
            raise Exception("Model not loaded")
        
        # Preprocess input
        processed_text = self.preprocess(text)
        
        # Get prediction
        prediction = self.model.predict(processed_text)
        confidence = float(prediction[0][0]) * 100
        
        # Determine classification (adjust threshold as needed)
        is_safe = confidence < 50
        
        return {
            "classification": "SAFE" if is_safe else "SCAM",
            "confidence": confidence if not is_safe else (100 - confidence),
            "details": self._generate_details(is_safe, confidence)
        }
    
    def _generate_details(self, is_safe: bool, confidence: float) -> str:
        """
        Generate user-friendly explanation
        """
        if is_safe:
            return "This message appears to be legitimate and safe. No suspicious patterns or phishing indicators were detected."
        else:
            return "This message contains suspicious patterns commonly found in phishing attempts. Please verify the sender before taking any action."
```

#### `schemas/request.py`
```python
from pydantic import BaseModel, Field

class AnalyzeRequest(BaseModel):
    message: str = Field(..., min_length=1, description="Urdu text message to analyze")

class ContactRequest(BaseModel):
    firstName: str = Field(..., min_length=1)
    lastName: str = Field(..., min_length=1)
    email: str = Field(..., regex=r'^[^\s@]+@[^\s@]+\.[^\s@]+$')
    message: str = Field(..., min_length=10)
```

#### `schemas/response.py`
```python
from pydantic import BaseModel

class AnalyzeResponse(BaseModel):
    classification: str  # "SAFE" or "SCAM"
    confidence: float    # 0-100
    details: str
    timestamp: str

class ContactResponse(BaseModel):
    success: bool
    message: str
```

---

## Integration Steps

### Step 1: Backend Developer (Sibghat Ullah)

#### 1.1 Setup Backend Project
```bash
# Create project directory
mkdir urdu-phishing-backend
cd urdu-phishing-backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate  # Windows
source venv/bin/activate  # Linux/Mac

# Install dependencies
pip install fastapi uvicorn python-multipart fastapi-cors
pip install tensorflow scikit-learn numpy pandas
# or
pip install torch transformers  # if using PyTorch
```

#### 1.2 Create Directory Structure
```bash
mkdir -p app/{routes,models,schemas,utils}
mkdir models  # for AI model files
touch app/__init__.py app/main.py
touch app/routes/{__init__.py,analyze.py,contact.py}
touch app/models/{__init__.py,phishing_model.py}
touch app/schemas/{__init__.py,request.py,response.py}
touch requirements.txt .env README.md
```

#### 1.3 Implement AI Model
```python
# In app/models/phishing_model.py
# - Load your trained model
# - Implement preprocessing
# - Implement prediction logic
# - Handle Urdu text processing
```

#### 1.4 Create API Endpoints
```python
# In app/routes/analyze.py
# - Create POST /api/analyze endpoint
# - Validate input
# - Call AI model
# - Return formatted response
```

#### 1.5 Test Backend Locally
```bash
# Run server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000

# Test with curl
curl -X POST "http://localhost:8000/api/analyze" \
  -H "Content-Type: application/json" \
  -d '{"message": "test message in Urdu"}'
```

---

### Step 2: Frontend Developer (Zaryab Khattak)

#### 2.1 Create Environment Configuration

Create `.env` file in frontend root:
```env
# Development
VITE_API_URL=http://localhost:8000/api
VITE_ENABLE_MOCK_API=false

# Production (update when deploying)
# VITE_API_URL=https://api.your-domain.com/api
# VITE_ENABLE_MOCK_API=false
```

#### 2.2 Update API Service

Edit `src/services/apiService.js`:

```javascript
import { APP_CONFIG } from '../constants/config';
import { delay } from '../utils/helpers';

// Get API URL from environment or use default
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';
const USE_MOCK = import.meta.env.VITE_ENABLE_MOCK_API === 'true';

/**
 * Analyzes message using real backend API
 */
export const analyzeMessage = async (message) => {
  try {
    // Validate input
    if (!message || message.trim().length === 0) {
      throw new Error('Message cannot be empty');
    }

    // Use mock API if enabled (development)
    if (USE_MOCK) {
      console.log('Using mock API...');
      await delay(APP_CONFIG.api.processingDelay);
      const isSafe = Math.random() > 0.5;
      return {
        classification: isSafe ? 'SAFE' : 'SCAM',
        confidence: isSafe 
          ? parseFloat((90 + Math.random() * 9).toFixed(1))
          : parseFloat((75 + Math.random() * 20).toFixed(1)),
        details: isSafe 
          ? 'This message appears to be legitimate and safe.'
          : 'This message contains suspicious patterns.',
        timestamp: new Date().toISOString(),
      };
    }

    // Real API call
    console.log('Calling backend API:', `${API_URL}/analyze`);
    
    const response = await fetch(`${API_URL}/analyze`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `API error: ${response.status}`);
    }

    const data = await response.json();
    console.log('API Response:', data);
    
    return data;

  } catch (error) {
    console.error('Error analyzing message:', error);
    throw new Error(error.message || 'Failed to analyze message. Please try again.');
  }
};

/**
 * Submit contact form to backend
 */
export const submitContactForm = async (formData) => {
  try {
    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'message'];
    const missingFields = requiredFields.filter(field => !formData[field]);
    
    if (missingFields.length > 0) {
      throw new Error(`Missing required fields: ${missingFields.join(', ')}`);
    }

    // Use mock if enabled
    if (USE_MOCK) {
      await delay(1000);
      return {
        success: true,
        message: 'Your message has been sent successfully!',
      };
    }

    // Real API call
    const response = await fetch(`${API_URL}/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error(`API error: ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw new Error('Failed to send message. Please try again.');
  }
};
```

#### 2.3 Update Config for Environment

Edit `src/constants/config.js`:

```javascript
export const APP_CONFIG = {
  name: 'Urdu Phishing Detector',
  version: '1.0.0',
  
  // API Configuration
  api: {
    baseUrl: import.meta.env.VITE_API_URL || 'http://localhost:8000/api',
    timeout: 30000,
    retryAttempts: 3,
    processingDelay: 3000,
  },
  
  // Feature Flags
  features: {
    mockApi: import.meta.env.VITE_ENABLE_MOCK_API === 'true',
    analytics: false,
    errorReporting: false,
  },
  
  // ... rest of config
};
```

#### 2.4 Test Integration Locally

1. Start backend server (port 8000)
2. Update `.env`: `VITE_ENABLE_MOCK_API=false`
3. Start frontend: `npm run dev`
4. Test the phishing detector form
5. Check browser console for API calls

---

### Step 3: Coordination & Testing

#### 3.1 Local Integration Testing

**Backend (Sibghat):**
```bash
# Terminal 1: Run backend
cd urdu-phishing-backend
uvicorn app.main:app --reload --port 8000
```

**Frontend (Zaryab):**
```bash
# Terminal 2: Run frontend
cd urdu-phishing-detector-frontend
npm run dev
```

**Test Flow:**
1. Open `http://localhost:5173`
2. Paste Urdu text in form
3. Click "Scan for Phishing"
4. Verify API call in Network tab
5. Check response format matches

#### 3.2 API Contract Validation

Create test cases to ensure compatibility:

**Test Cases:**
```javascript
// Test 1: Valid message
{
  request: { message: "یہ ایک ٹیسٹ میسج ہے" },
  expectedResponse: {
    classification: "SAFE" | "SCAM",
    confidence: 0-100,
    details: string,
    timestamp: ISO8601
  }
}

// Test 2: Empty message
{
  request: { message: "" },
  expectedResponse: {
    error: true,
    message: "Message cannot be empty"
  }
}

// Test 3: Long message
{
  request: { message: "very long text..." },
  expectedResponse: { /* normal response */ }
}
```

---

## Environment Setup

### Development Environment

**Backend `.env`:**
```env
# Server
HOST=0.0.0.0
PORT=8000
DEBUG=True

# CORS
ALLOWED_ORIGINS=http://localhost:5173,http://localhost:3000

# Model
MODEL_PATH=models/urdu_phishing_model.h5

# Optional: Database
DATABASE_URL=postgresql://user:pass@localhost:5432/dbname
```

**Frontend `.env`:**
```env
VITE_API_URL=http://localhost:8000/api
VITE_ENABLE_MOCK_API=false
```

### Production Environment

**Backend `.env.production`:**
```env
HOST=0.0.0.0
PORT=8000
DEBUG=False

ALLOWED_ORIGINS=https://your-domain.com

MODEL_PATH=/app/models/urdu_phishing_model.h5

# Security
SECRET_KEY=your-secret-key-here
API_KEY=your-api-key-here
```

**Frontend `.env.production`:**
```env
VITE_API_URL=https://api.your-domain.com/api
VITE_ENABLE_MOCK_API=false
```

---

## Deployment

### Option 1: Separate Deployment

**Backend (Render/Railway/Heroku):**
```bash
# Deploy Python backend
git push heroku main
# or use Render/Railway dashboard
```

**Frontend (Vercel/Netlify):**
```bash
# Deploy React frontend
vercel --prod
# or use Netlify dashboard
```

### Option 2: Monorepo Deployment

Structure:
```
urdu-phishing-detector/
├── frontend/
│   └── (React app)
└── backend/
    └── (FastAPI app)
```

Deploy both together on platforms like:
- Render
- Railway
- DigitalOcean App Platform

---

## Testing Checklist

### Backend Testing
- [ ] AI model loads successfully
- [ ] `/api/analyze` returns correct format
- [ ] CORS headers properly configured
- [ ] Error handling works
- [ ] Input validation works
- [ ] Performance is acceptable (<3 seconds)

### Frontend Testing
- [ ] API calls work with real backend
- [ ] Loading states display correctly
- [ ] Error messages show properly
- [ ] Result display works
- [ ] Environment variables load correctly
- [ ] Production build works

### Integration Testing
- [ ] End-to-end flow works
- [ ] CORS no errors in browser console
- [ ] Network requests succeed
- [ ] Response format matches
- [ ] Error handling works properly

---

## Troubleshooting

### Common Issues

#### 1. CORS Errors
**Problem:** Browser blocks requests
**Solution:**
```python
# In backend main.py, add frontend URL
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

#### 2. Connection Refused
**Problem:** Cannot connect to backend
**Solution:**
- Check backend is running
- Verify URL in `.env`
- Check firewall settings

#### 3. Model Loading Error
**Problem:** AI model fails to load
**Solution:**
- Verify model file path
- Check model file format
- Ensure dependencies installed

#### 4. Timeout Errors
**Problem:** Requests timeout
**Solution:**
- Optimize model inference
- Increase timeout in frontend
- Add caching

---

## Security Considerations

### API Security
```python
# Add rate limiting
from slowapi import Limiter
limiter = Limiter(key_func=lambda: "global")

@app.post("/api/analyze")
@limiter.limit("10/minute")
async def analyze():
    pass
```

### Input Sanitization
```python
# Validate and sanitize input
def sanitize_input(text: str) -> str:
    # Remove potentially harmful characters
    # Limit length
    # Remove scripts
    return cleaned_text
```

### Environment Variables
```python
# Never commit .env files
# Use secrets management in production
import os
SECRET_KEY = os.getenv("SECRET_KEY")
```

---

## Contact & Support

### For Integration Issues

**Backend Questions (Sibghat Ullah):**
- AI Model integration
- API endpoint implementation
- Python/ML issues

**Frontend Questions (Zaryab Khattak):**
- React integration
- UI/UX updates
- Deployment issues

**Collaboration:**
- Use the PROJECT_STRUCTURE.md as reference
- Follow CODE_STANDARDS.md for consistency
- Document all API changes

---

## Next Steps

1. **Sibghat:** Setup backend repository and implement API
2. **Zaryab:** Test integration with backend once ready
3. **Both:** Coordinate on API contract and testing
4. **Both:** Deploy to production environments
5. **Both:** Monitor and optimize performance

---

## Useful Commands

### Backend
```bash
# Run server
uvicorn app.main:app --reload --port 8000

# Test endpoint
curl -X POST http://localhost:8000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"message":"test"}'

# Check logs
tail -f logs/app.log
```

### Frontend
```bash
# Development with mock API
VITE_ENABLE_MOCK_API=true npm run dev

# Development with real API
VITE_ENABLE_MOCK_API=false npm run dev

# Production build
npm run build

# Test production build
npm run preview
```

---

**Good luck with the integration! 🚀**
