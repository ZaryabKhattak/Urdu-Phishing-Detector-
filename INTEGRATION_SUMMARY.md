# 🚀 Frontend-Backend Integration Summary

## Quick Overview

This document provides a high-level summary of how to integrate the Urdu Phishing Detector frontend with the backend AI model.

---

## 👥 Team Roles

### Sibghat Ullah (Backend Developer)
**Responsibilities:**
- Create Python backend with FastAPI
- Implement AI model for phishing detection
- Create `/api/analyze` endpoint
- Configure CORS for frontend communication
- Deploy backend to hosting service

### Zaryab Khattak (Frontend Developer)
**Responsibilities:**
- Configure environment variables
- Test API integration
- Handle loading/error states
- Deploy frontend to hosting service

---

## 📁 Key Files

### For Backend Developer (Sibghat)

**Create these files:**
```
backend/
├── app/
│   ├── main.py                    # FastAPI app with CORS
│   ├── routes/analyze.py          # POST /api/analyze endpoint
│   └── models/phishing_model.py   # AI model wrapper
├── requirements.txt               # Python dependencies
└── .env                          # Environment config
```

**Core Dependencies:**
```bash
pip install fastapi uvicorn python-multipart fastapi-cors
pip install tensorflow  # or pytorch
```

**Critical: API Response Format**
```json
{
  "classification": "SAFE",    // or "SCAM"
  "confidence": 94.5,          // 0-100
  "details": "Message is safe",
  "timestamp": "2024-10-21T10:30:00Z"
}
```

### For Frontend Developer (Zaryab)

**Already created (no changes needed):**
- ✅ `src/services/apiService.js` - API calls ready
- ✅ `src/constants/config.js` - Configuration
- ✅ All components already use the service

**Only need to create:**
```
.env                    # Environment variables
```

**Environment Setup:**
```env
# .env file
VITE_API_URL=http://localhost:8000/api
VITE_ENABLE_MOCK_API=false
```

---

## 🔄 Integration Process

### Step 1: Backend Setup (Sibghat - 2-3 hours)

```bash
# 1. Create project
mkdir urdu-phishing-backend
cd urdu-phishing-backend
python -m venv venv
venv\Scripts\activate

# 2. Install dependencies
pip install fastapi uvicorn python-multipart fastapi-cors

# 3. Create main.py with CORS
# See BACKEND_INTEGRATION.md for full code

# 4. Run server
uvicorn app.main:app --reload --port 8000

# 5. Test endpoint
curl -X POST http://localhost:8000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"message":"test"}'
```

**Critical Code - CORS Configuration:**
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend URL
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Step 2: Frontend Setup (Zaryab - 5 minutes)

```bash
# 1. Copy .env.example to .env
cp .env.example .env

# 2. Edit .env
# Set VITE_API_URL=http://localhost:8000/api
# Set VITE_ENABLE_MOCK_API=false

# 3. Restart dev server
npm run dev

# 4. Test in browser
# Open http://localhost:5173
# Paste text and click "Scan for Phishing"
# Check Network tab for API call
```

### Step 3: Test Together (Both - 30 minutes)

```bash
# Terminal 1 (Sibghat): Backend
uvicorn app.main:app --reload --port 8000

# Terminal 2 (Zaryab): Frontend
npm run dev

# Browser: Test the app
http://localhost:5173
```

**Test Checklist:**
- ✅ Message gets sent to backend
- ✅ Response returns in <3 seconds
- ✅ Result displays correctly
- ✅ No CORS errors in console
- ✅ Error handling works

---

## 🎯 API Contract

### Request
```javascript
POST /api/analyze

{
  "message": "آپ کا اکاؤنٹ بلاک ہو گیا ہے"
}
```

### Response (Success)
```javascript
{
  "classification": "SCAM",           // Must be "SAFE" or "SCAM"
  "confidence": 87.3,                 // Float 0-100
  "details": "Contains suspicious patterns",
  "timestamp": "2024-10-21T10:30:00Z"
}
```

### Response (Error)
```javascript
{
  "error": "Invalid request",
  "message": "Message cannot be empty"
}
```

---

## 🐛 Common Issues & Solutions

### Issue 1: CORS Error
**Error:** "Access to fetch has been blocked by CORS policy"

**Solution (Backend):**
```python
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Add this!
    allow_methods=["*"],
    allow_headers=["*"],
)
```

### Issue 2: Connection Refused
**Error:** "Failed to fetch" or "Network Error"

**Solutions:**
1. Check backend is running: `curl http://localhost:8000/health`
2. Check .env has correct URL: `VITE_API_URL=http://localhost:8000/api`
3. Restart frontend: `npm run dev`

### Issue 3: Wrong Response Format
**Error:** Frontend doesn't display result

**Solution (Backend):** Ensure response matches exactly:
```python
return {
    "classification": "SAFE",  # NOT "safe" or "Safe"
    "confidence": 94.5,        # NOT "94.5" (must be number)
    "details": "...",
    "timestamp": "2024-10-21T10:30:00Z"
}
```

---

## 📦 Deployment

### Backend Deployment (Sibghat)

**Recommended: Render.com (Free tier)**
```bash
# 1. Push code to GitHub
# 2. Connect to Render
# 3. Deploy as Web Service
# 4. Get URL: https://your-app.onrender.com
# 5. Share URL with Zaryab
```

**Environment Variables on Render:**
```
ALLOWED_ORIGINS=https://your-frontend.vercel.app
MODEL_PATH=/app/models/urdu_phishing_model.h5
```

### Frontend Deployment (Zaryab)

**Recommended: Vercel (Free tier)**
```bash
# 1. Update .env.production
VITE_API_URL=https://your-app.onrender.com/api
VITE_ENABLE_MOCK_API=false

# 2. Deploy to Vercel
npm run build
vercel --prod

# 3. Test production site
```

---

## 📊 Progress Tracking

### Backend Progress (Sibghat)
- [ ] Setup FastAPI project
- [ ] Implement CORS middleware
- [ ] Create /api/analyze endpoint
- [ ] Load AI model
- [ ] Implement preprocessing
- [ ] Test with curl
- [ ] Deploy to Render
- [ ] Share production URL

### Frontend Progress (Zaryab)
- [x] API service already created
- [x] UI components ready
- [ ] Create .env file
- [ ] Test with local backend
- [ ] Test error scenarios
- [ ] Update production .env
- [ ] Deploy to Vercel
- [ ] Test production

### Integration Progress (Both)
- [ ] Test locally together
- [ ] Verify response format
- [ ] Test error handling
- [ ] Performance testing
- [ ] Deploy to production
- [ ] Test production together
- [ ] Monitor and optimize

---

## 📚 Documentation Reference

| Document | Purpose | Reader |
|----------|---------|--------|
| **BACKEND_INTEGRATION.md** | Complete backend guide with code examples | Sibghat |
| **INTEGRATION_CHECKLIST.md** | Step-by-step checklist for both | Both |
| **CODE_STANDARDS.md** | Coding guidelines | Both |
| **PROJECT_STRUCTURE.md** | Architecture overview | Both |

---

## 💬 Communication Flow

### When Sibghat Finishes Backend:
```
✅ Backend is ready!
API URL: http://localhost:8000
Endpoint: POST /api/analyze

Test with:
curl -X POST http://localhost:8000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"message":"test"}'

Response format:
{
  "classification": "SAFE",
  "confidence": 94.5,
  "details": "...",
  "timestamp": "..."
}

Ready for integration testing?
```

### When Zaryab Tests Integration:
```
✅ Frontend connected successfully!
- API calls working
- Results displaying correctly
- No CORS errors
- Error handling works

OR

❌ Issue found:
- Error: [description]
- Screenshot: [attach]
- Network tab: [attach]

Can we debug together?
```

---

## 🎯 Success Criteria

Integration is complete when:

**Technical:**
- ✅ Frontend sends request to backend
- ✅ Backend processes and returns correct format
- ✅ Frontend displays result correctly
- ✅ No console errors
- ✅ Error handling works
- ✅ Performance <3 seconds

**User Experience:**
- ✅ User pastes Urdu text
- ✅ Clicks "Scan for Phishing"
- ✅ Sees processing animation
- ✅ Gets result (SAFE or SCAM)
- ✅ Sees confidence score
- ✅ Gets helpful explanation

**Production:**
- ✅ Backend deployed and running
- ✅ Frontend deployed and running
- ✅ Production API calls work
- ✅ Both team members can access
- ✅ Analytics/monitoring setup

---

## ⏱️ Estimated Timeline

| Phase | Who | Time | Tasks |
|-------|-----|------|-------|
| **Backend Setup** | Sibghat | 2-3 hours | FastAPI + AI model |
| **Frontend Config** | Zaryab | 5 mins | Create .env |
| **Local Testing** | Both | 30 mins | Test together |
| **Fixes** | Both | 1-2 hours | Debug issues |
| **Deployment** | Both | 1 hour | Deploy both apps |
| **Production Test** | Both | 30 mins | Final testing |
| **Total** | Both | **5-7 hours** | Full integration |

---

## 🚀 Quick Start Commands

### Sibghat (Backend)
```bash
# Setup
python -m venv venv
venv\Scripts\activate
pip install fastapi uvicorn fastapi-cors

# Run
uvicorn app.main:app --reload --port 8000

# Test
curl -X POST http://localhost:8000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"message":"test"}'
```

### Zaryab (Frontend)
```bash
# Setup
cp .env.example .env
# Edit .env: Set VITE_API_URL and VITE_ENABLE_MOCK_API

# Run
npm run dev

# Test
# Open http://localhost:5173
# Use the app and check Network tab
```

---

## 📞 Support

**For Questions:**
- Backend: Contact Sibghat Ullah
- Frontend: Contact Zaryab Khattak (zaryab9339@gmail.com)

**For Issues:**
- Share screenshots
- Share console logs
- Share Network tab
- Schedule quick debugging call

---

## ✨ Final Notes

1. **Communication is key** - Keep each other updated
2. **Test frequently** - Don't wait until the end
3. **Document issues** - Help future debugging
4. **Celebrate progress** - This is a major milestone!

**Remember:** The frontend is already 100% ready for integration. Just need backend API and environment configuration! 🎉

---

**Good luck with the integration! You've got this! 💪**
