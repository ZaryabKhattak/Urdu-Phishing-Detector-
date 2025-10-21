# Architecture Diagrams

Visual representations of the system architecture and data flow.

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                         USER                                 │
│                   (Browser/Mobile)                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ HTTPS
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                    FRONTEND (React)                          │
│                  Deployed on Vercel                          │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  UI Components                                        │  │
│  │  - MainScreen (Phishing Detector Form)              │  │
│  │  - About, Privacy, Terms, Contact Pages             │  │
│  │  - SharedNavbar, SharedFooter                        │  │
│  └────────────────┬─────────────────────────────────────┘  │
│                   │                                          │
│  ┌────────────────▼─────────────────────────────────────┐  │
│  │  Services Layer                                       │  │
│  │  - apiService.js (API communication)                 │  │
│  └────────────────┬─────────────────────────────────────┘  │
│                   │                                          │
│  ┌────────────────▼─────────────────────────────────────┐  │
│  │  State Management                                     │  │
│  │  - Custom Hooks (useForm, useAsync)                  │  │
│  │  - Constants (theme, config)                         │  │
│  └──────────────────────────────────────────────────────┘  │
└────────────────────┬────────────────────────────────────────┘
                     │
                     │ REST API (JSON)
                     │ POST /api/analyze
                     │
                     ▼
┌─────────────────────────────────────────────────────────────┐
│                   BACKEND (Python)                           │
│                 Deployed on Render                           │
│  ┌──────────────────────────────────────────────────────┐  │
│  │  FastAPI Server                                       │  │
│  │  - CORS Middleware                                    │  │
│  │  - Request Validation                                 │  │
│  │  - Error Handling                                     │  │
│  └────────────────┬─────────────────────────────────────┘  │
│                   │                                          │
│  ┌────────────────▼─────────────────────────────────────┐  │
│  │  API Routes                                           │  │
│  │  - POST /api/analyze (Phishing Detection)            │  │
│  │  - POST /api/contact (Contact Form)                  │  │
│  │  - GET /health (Health Check)                        │  │
│  └────────────────┬─────────────────────────────────────┘  │
│                   │                                          │
│  ┌────────────────▼─────────────────────────────────────┐  │
│  │  AI Model Layer                                       │  │
│  │  - phishing_model.py                                 │  │
│  │  - Text Preprocessing (Urdu)                         │  │
│  │  - TensorFlow/PyTorch Model                          │  │
│  │  - Prediction Logic                                   │  │
│  └──────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

---

## Data Flow - Phishing Detection

```
┌──────────┐
│   USER   │
│  Types   │
│  Message │
└────┬─────┘
     │
     │ 1. User pastes Urdu text
     │    "آپ کا اکاؤنٹ بلاک ہو گیا"
     ▼
┌─────────────────┐
│  MainScreen.jsx │
│                 │
│  State:         │
│  - message      │
│  - currentStep  │
│  - result       │
└────┬────────────┘
     │
     │ 2. handleScan() triggered
     │    setCurrentStep(2) // Processing
     ▼
┌─────────────────┐
│  apiService.js  │
│                 │
│  analyzeMessage │
│  (message)      │
└────┬────────────┘
     │
     │ 3. POST request
     │    URL: http://localhost:8000/api/analyze
     │    Body: { "message": "..." }
     │    Headers: { "Content-Type": "application/json" }
     ▼
┌──────────────────────────────────────┐
│        BACKEND RECEIVES              │
│                                      │
│  FastAPI validates request           │
│  ┌──────────────────────────┐      │
│  │  Request Schema:         │      │
│  │  {                       │      │
│  │    "message": "string"   │      │
│  │  }                       │      │
│  └──────────────────────────┘      │
└────┬─────────────────────────────────┘
     │
     │ 4. Route to analyze endpoint
     ▼
┌─────────────────────┐
│  analyze.py         │
│                     │
│  - Validate input   │
│  - Call AI model    │
└────┬────────────────┘
     │
     │ 5. Process with AI
     ▼
┌──────────────────────┐
│  phishing_model.py   │
│                      │
│  Steps:              │
│  1. Preprocess text  │
│  2. Tokenize         │
│  3. Run inference    │
│  4. Get confidence   │
└────┬─────────────────┘
     │
     │ 6. Return prediction
     │    classification: "SCAM"
     │    confidence: 87.3
     ▼
┌──────────────────────────────────────┐
│      BACKEND RESPONDS                │
│                                      │
│  {                                   │
│    "classification": "SCAM",         │
│    "confidence": 87.3,               │
│    "details": "Contains suspicious   │
│                patterns...",         │
│    "timestamp": "2024-10-21..."      │
│  }                                   │
└────┬─────────────────────────────────┘
     │
     │ 7. JSON response
     ▼
┌─────────────────┐
│  apiService.js  │
│                 │
│  Receives data  │
│  Returns to     │
│  component      │
└────┬────────────┘
     │
     │ 8. Update state
     ▼
┌─────────────────┐
│  MainScreen.jsx │
│                 │
│  setResult(data)│
│  setCurrentStep │
│  (3) // Result  │
└────┬────────────┘
     │
     │ 9. Render result
     ▼
┌─────────────────┐
│   DISPLAY       │
│                 │
│  ┌───────────┐ │
│  │   SCAM    │ │
│  │  87.3%    │ │
│  │  Details  │ │
│  └───────────┘ │
└─────────────────┘
```

---

## Request/Response Flow

### Frontend → Backend
```javascript
// Request
POST /api/analyze
Content-Type: application/json

{
  "message": "آپ کا اکاؤنٹ بلاک ہو گیا ہے۔ یہاں کلک کریں"
}
```

### Backend Processing
```
1. Receive request
2. Validate message exists
3. Preprocess Urdu text
   - Remove extra spaces
   - Normalize Unicode
   - Tokenize
4. Run AI model
   - Convert to embeddings
   - Model inference
   - Get probability score
5. Format response
   - Determine classification
   - Calculate confidence
   - Generate explanation
```

### Backend → Frontend
```javascript
// Response
Status: 200 OK
Content-Type: application/json

{
  "classification": "SCAM",
  "confidence": 87.3,
  "details": "This message contains suspicious patterns commonly found in phishing attempts. Please verify the sender before taking any action.",
  "timestamp": "2024-10-21T10:30:00Z"
}
```

---

## Component Hierarchy

```
App (React Router)
│
├── Route: "/"
│   └── MainScreen
│       ├── SharedNavbar
│       ├── StepIndicators (integrated)
│       │   ├── Step 1: Paste Text
│       │   ├── Step 2: Processing
│       │   └── Step 3: Result
│       ├── InputForm (integrated)
│       │   └── Textarea
│       ├── ResultCard (integrated)
│       │   ├── Classification Badge
│       │   ├── Confidence Score
│       │   └── Details Text
│       └── SharedFooter
│
├── Route: "/about"
│   └── About
│       ├── SharedNavbar
│       ├── Hero Section
│       ├── Feature Cards
│       ├── Team Section
│       └── SharedFooter
│
├── Route: "/contact"
│   └── Contact
│       ├── SharedNavbar
│       ├── Contact Form
│       │   ├── First Name
│       │   ├── Last Name
│       │   ├── Email
│       │   └── Message
│       ├── Contact Info
│       └── SharedFooter
│
├── Route: "/privacy"
│   └── Privacy
│       ├── SharedNavbar
│       ├── Policy Sections
│       └── SharedFooter
│
└── Route: "/terms"
    └── Terms
        ├── SharedNavbar
        ├── Terms Sections
        └── SharedFooter
```

---

## State Management Flow

```
┌─────────────────────────────────────┐
│          User Action                │
│  (Paste text, Click button)         │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│       Event Handler                 │
│  handleTextChange()                 │
│  handleScan()                       │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│       Update State                  │
│  setMessage(text)                   │
│  setCurrentStep(1)                  │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│       API Call                      │
│  analyzeMessage(message)            │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│       Backend Processing            │
│  (3 seconds)                        │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│       Update State                  │
│  setResult(data)                    │
│  setCurrentStep(3)                  │
└────────────┬────────────────────────┘
             │
             ▼
┌─────────────────────────────────────┐
│       Re-render UI                  │
│  Display result card                │
└─────────────────────────────────────┘
```

---

## Deployment Architecture

### Development
```
┌─────────────────┐         ┌─────────────────┐
│   Frontend      │         │    Backend      │
│  localhost:5173 │◄───────►│ localhost:8000  │
│   (Vite Dev)    │  CORS   │   (FastAPI)     │
└─────────────────┘         └─────────────────┘
```

### Production
```
┌──────────────────────┐         ┌──────────────────────┐
│   Frontend (Vercel)  │         │  Backend (Render)    │
│  your-app.vercel.app │◄───────►│ api.your-domain.com  │
│      HTTPS           │  CORS   │       HTTPS          │
└──────────────────────┘         └──────────────────────┘
```

---

## Error Handling Flow

```
User Action
    │
    ▼
Try API Call
    │
    ├─── Success ──────► Display Result
    │
    └─── Error
         │
         ├─── Network Error ──► "Cannot connect to server"
         │
         ├─── 400 Bad Request ──► "Invalid input"
         │
         ├─── 500 Server Error ──► "Server error, try again"
         │
         └─── Timeout ──► "Request timed out"
```

---

## File Structure Flow

```
User opens app
    │
    ▼
index.html loads
    │
    ▼
main.jsx executes
    │
    ▼
App.jsx initializes
    │
    ▼
React Router matches route
    │
    ├─── "/" ──────────► MainScreen.jsx
    │                         │
    │                         ├─► Imports constants/theme.js
    │                         ├─► Imports services/apiService.js
    │                         ├─► Imports hooks/index.js
    │                         └─► Renders UI
    │
    ├─── "/about" ──────► About.jsx
    ├─── "/contact" ────► Contact.jsx
    ├─── "/privacy" ────► Privacy.jsx
    └─── "/terms" ──────► Terms.jsx
```

---

## Development Workflow

```
┌────────────────────┐
│ Sibghat (Backend)  │
│                    │
│ 1. Create FastAPI  │
│ 2. Implement AI    │
│ 3. Test locally    │
│ 4. Deploy          │
│ 5. Share URL       │
└─────────┬──────────┘
          │
          │ Backend URL
          │
          ▼
┌────────────────────┐
│ Zaryab (Frontend)  │
│                    │
│ 1. Update .env     │
│ 2. Test locally    │
│ 3. Fix issues      │
│ 4. Deploy          │
│ 5. Verify prod     │
└────────────────────┘
```

---

## API Contract Visualization

```
┌───────────────────────────────────────────────────┐
│              API ENDPOINT                         │
│  POST /api/analyze                                │
└───────────────────────────────────────────────────┘
                     │
        ┌────────────┴────────────┐
        │                         │
        ▼                         ▼
┌────────────────┐      ┌────────────────┐
│    REQUEST     │      │    RESPONSE    │
└────────────────┘      └────────────────┘
        │                         │
        │                         ▼
        ▼               ┌─────────────────────┐
┌────────────────┐      │ Success (200 OK)    │
│ {              │      │ {                   │
│   "message":   │      │   "classification": │
│     "string"   │      │     "SAFE"|"SCAM"   │
│ }              │      │   "confidence":     │
└────────────────┘      │     0-100           │
                        │   "details": "..."  │
                        │   "timestamp": "..."│
                        │ }                   │
                        └─────────────────────┘
                                  │
                        ┌─────────┴─────────┐
                        │                   │
                        ▼                   ▼
              ┌──────────────┐    ┌──────────────┐
              │ Error (400)  │    │ Error (500)  │
              │ Bad Request  │    │ Server Error │
              └──────────────┘    └──────────────┘
```

---

These diagrams should help visualize the complete architecture and data flow! 🎨
