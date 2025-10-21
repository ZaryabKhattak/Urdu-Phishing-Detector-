# Integration Checklist

Quick reference for backend and frontend integration tasks.

## 📋 For Backend Developer (Sibghat Ullah)

### Initial Setup
- [ ] Create Python virtual environment
- [ ] Install FastAPI and dependencies
  ```bash
  pip install fastapi uvicorn python-multipart fastapi-cors
  pip install tensorflow scikit-learn numpy pandas
  ```
- [ ] Create project structure
  ```
  backend/
  ├── app/
  │   ├── main.py
  │   ├── routes/analyze.py
  │   ├── models/phishing_model.py
  │   └── schemas/
  └── models/urdu_phishing_model.h5
  ```

### API Implementation
- [ ] Create main.py with FastAPI app
- [ ] **Configure CORS** (CRITICAL!)
  ```python
  app.add_middleware(
      CORSMiddleware,
      allow_origins=["http://localhost:5173"],
      allow_methods=["*"],
      allow_headers=["*"],
  )
  ```
- [ ] Implement POST /api/analyze endpoint
- [ ] Load AI model in phishing_model.py
- [ ] Implement preprocessing for Urdu text
- [ ] Implement prediction logic

### API Response Format (MUST MATCH)
```python
{
    "classification": "SAFE" or "SCAM",  # Exactly these strings
    "confidence": 87.3,                   # Float 0-100
    "details": "Explanation text...",     # String
    "timestamp": "2024-10-21T10:30:00Z"  # ISO format
}
```

### Testing Backend
- [ ] Start server: `uvicorn app.main:app --reload --port 8000`
- [ ] Test health endpoint: `curl http://localhost:8000/health`
- [ ] Test analyze endpoint:
  ```bash
  curl -X POST http://localhost:8000/api/analyze \
    -H "Content-Type: application/json" \
    -d '{"message":"یہ ٹیسٹ ہے"}'
  ```
- [ ] Verify response format matches exactly
- [ ] Check CORS headers in response
- [ ] Test error handling (empty message, invalid input)

### Share with Frontend Team
- [ ] Backend URL (e.g., `http://localhost:8000`)
- [ ] API endpoint: `/api/analyze`
- [ ] Request/response format examples
- [ ] Any authentication requirements
- [ ] Rate limits (if any)

---

## 💻 For Frontend Developer (Zaryab Khattak)

### Initial Setup
- [ ] Get backend URL from Sibghat
- [ ] Create `.env` file in project root:
  ```env
  VITE_API_URL=http://localhost:8000/api
  VITE_ENABLE_MOCK_API=false
  ```
- [ ] Verify API service file exists: `src/services/apiService.js`

### Environment Configuration
- [ ] Update `.env` with correct backend URL
- [ ] Set `VITE_ENABLE_MOCK_API=false` for real API
- [ ] Set `VITE_ENABLE_MOCK_API=true` for testing without backend

### API Integration
- [ ] Verify `apiService.js` uses environment variables
- [ ] Test API call in browser console:
  ```javascript
  import { analyzeMessage } from './services/apiService';
  analyzeMessage("test").then(console.log);
  ```
- [ ] Check Network tab for CORS errors
- [ ] Verify response format matches frontend expectations

### Testing Frontend
- [ ] Start dev server: `npm run dev`
- [ ] Open browser to `http://localhost:5173`
- [ ] Open DevTools Network tab
- [ ] Paste text and click "Scan for Phishing"
- [ ] Verify request is sent to backend
- [ ] Check response in Network tab
- [ ] Verify UI displays result correctly
- [ ] Test error scenarios (empty input, backend down)

### Production Build
- [ ] Update `.env.production` with production API URL
- [ ] Build: `npm run build`
- [ ] Preview: `npm run preview`
- [ ] Test production build thoroughly

---

## 🤝 Coordination Tasks (Both Developers)

### Pre-Integration Meeting
- [ ] Agree on API endpoint structure
- [ ] Agree on request/response format
- [ ] Decide on error handling approach
- [ ] Set testing schedule

### During Integration
- [ ] Backend: Ensure server is running on agreed port
- [ ] Frontend: Ensure .env has correct backend URL
- [ ] Both: Test together on video call
- [ ] Both: Document any issues in shared doc

### Testing Together
- [ ] Test happy path (normal message → correct result)
- [ ] Test Urdu text (verify encoding works)
- [ ] Test long messages
- [ ] Test empty/invalid input
- [ ] Test when backend is slow
- [ ] Test when backend returns error

### Deployment Coordination
- [ ] Backend deploys first to get production URL
- [ ] Backend shares production API URL
- [ ] Frontend updates `.env.production`
- [ ] Frontend deploys with correct API URL
- [ ] Both test production environment

---

## 🔍 Quick Debug Checklist

### If API Calls Fail

#### Check Backend (Sibghat)
- [ ] Is server running? Check terminal
- [ ] Is it on correct port? (8000)
- [ ] Check server logs for errors
- [ ] Test endpoint with curl/Postman
- [ ] Verify CORS is configured

#### Check Frontend (Zaryab)
- [ ] Is .env file loaded? (`console.log(import.meta.env)`)
- [ ] Is API URL correct in .env?
- [ ] Check browser console for errors
- [ ] Check Network tab for failed requests
- [ ] Is VITE_ENABLE_MOCK_API=false?

#### Check CORS Issues
**Browser Error:** "Access to fetch... has been blocked by CORS policy"

**Backend Fix:**
```python
# In main.py
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Add frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

---

## 📝 Communication Template

### When Backend is Ready
**Sibghat sends to Zaryab:**
```
Backend is ready for testing!

API URL: http://localhost:8000
Endpoint: POST /api/analyze

Request format:
{
  "message": "your urdu text here"
}

Response format:
{
  "classification": "SAFE",
  "confidence": 94.5,
  "details": "Message is safe",
  "timestamp": "2024-10-21T10:30:00Z"
}

Test it with:
curl -X POST http://localhost:8000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"message":"test"}'

Let me know if you face any issues!
```

### When Frontend is Ready to Test
**Zaryab sends to Sibghat:**
```
Frontend is ready to test integration!

Please ensure:
- Backend is running on port 8000
- CORS is enabled for http://localhost:5173
- /api/analyze endpoint is active

I'll test from my side and report any issues.
Let's schedule a call to test together?
```

### Reporting Issues
```
Issue: CORS error when calling API

Details:
- Frontend URL: http://localhost:5173
- Backend URL: http://localhost:8000/api/analyze
- Error in console: [paste error]
- Network tab shows: [screenshot]

Can you check CORS configuration on backend?
```

---

## 🚀 Deployment Checklist

### Backend Deployment (Sibghat)
- [ ] Choose hosting (Render/Railway/Heroku)
- [ ] Set environment variables
- [ ] Deploy backend code
- [ ] Get production URL
- [ ] Test production endpoint with curl
- [ ] Share production URL with Zaryab

### Frontend Deployment (Zaryab)
- [ ] Get production backend URL from Sibghat
- [ ] Update `.env.production`:
  ```env
  VITE_API_URL=https://api.your-domain.com/api
  VITE_ENABLE_MOCK_API=false
  ```
- [ ] Build production: `npm run build`
- [ ] Deploy to Vercel/Netlify
- [ ] Test production site
- [ ] Verify API calls work in production

### Post-Deployment
- [ ] Both: Test production site together
- [ ] Both: Monitor for errors
- [ ] Both: Update documentation with prod URLs

---

## 📞 Contact Points

### For API Questions
Contact: **Sibghat Ullah** (Founder & Cybersecurity Engineer)

### For Frontend Questions
Contact: **Zaryab Khattak** (Co-Founder & Product Designer)
Email: zaryab9339@gmail.com

### For Urgent Issues
- Schedule quick call
- Use screen sharing for debugging
- Share error logs/screenshots

---

## 🎯 Success Criteria

Integration is successful when:
- [ ] Frontend can send message to backend
- [ ] Backend processes and returns correct format
- [ ] Frontend displays result correctly
- [ ] No CORS errors in browser console
- [ ] Error handling works (network errors, invalid input)
- [ ] Performance is acceptable (<3 seconds)
- [ ] Production deployment works
- [ ] Both developers can access and test

---

## 📚 Reference Documents

- **BACKEND_INTEGRATION.md** - Complete integration guide
- **CODE_STANDARDS.md** - Coding guidelines
- **PROJECT_STRUCTURE.md** - Architecture overview
- **README.md** - Project documentation

---

## ⚡ Quick Commands Reference

### Backend (Sibghat)
```bash
# Activate environment
venv\Scripts\activate  # Windows
source venv/bin/activate  # Linux/Mac

# Run server
uvicorn app.main:app --reload --port 8000

# Test API
curl -X POST http://localhost:8000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"message":"test"}'
```

### Frontend (Zaryab)
```bash
# With mock API (no backend needed)
npm run dev  # with VITE_ENABLE_MOCK_API=true

# With real API (backend must be running)
npm run dev  # with VITE_ENABLE_MOCK_API=false

# Check environment
node -e "console.log(process.env)"
```

---

**Remember:** Communication is key! Keep each other updated on progress and blockers. 🤝
