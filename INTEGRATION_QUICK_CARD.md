# Quick Integration Card - Share with Sibghat

**From:** Zaryab  
**To:** Sibghat  
**Subject:** Backend Integration Requirements

---

## 🎯 What We Need to Build

**User Journey:**
1. User visits website → Enters Urdu message → Clicks "Scan" → Sees result (SAFE/PHISHING)

**Your Part:** Backend API + ML Model  
**My Part:** Frontend (already done!)

---

## 📋 What You Need to Do

### 1. Create Backend API

**Technology:** FastAPI (recommended) or Flask

**Required Endpoint:**

```
POST /api/analyze
```

**Request Format (what I'll send you):**
```json
{
  "message": "Aap ne 1 crore rupay jeeta hai! Is link par click karen..."
}
```

**Response Format (what you send back):**
```json
{
  "label": "PHISHING",
  "confidence": 0.89,
  "message": "Analysis complete. Message classified as PHISHING."
}
```

**Label options:** `"SAFE"`, `"SUSPICIOUS"`, or `"PHISHING"`

---

### 2. CORS Configuration (CRITICAL!)

Add this to your backend so my frontend can access it:

**Python (FastAPI):**
```python
from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",  # For my local testing
        "https://urdu-phishing-detector.vercel.app",  # Production
    ],
    allow_methods=["*"],
    allow_headers=["*"],
)
```

Without this, we'll get CORS errors and nothing will work!

---

### 3. ML Model Integration

**Option A: Embed in Backend (Easiest)**
- Load your `model.pkl` file in backend
- Run predictions directly
- No extra hosting needed

**Option B: Separate API**
- Host model on Hugging Face
- Call from backend
- More complex but cleaner

**I recommend Option A for simplicity!**

---

### 4. Local Testing Steps

```bash
# 1. Run your backend
python main.py
# Should run on: http://localhost:8000

# 2. Test health check
curl http://localhost:8000/

# 3. Test analyze endpoint
curl -X POST http://localhost:8000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"message": "Test Urdu text"}'

# 4. Tell me when it works!
```

---

### 5. Deploy Backend

**Recommended Platform:** Render.com (Free tier available)

**Steps:**
1. Push your code to GitHub
2. Sign up on Render.com
3. Create "Web Service"
4. Connect your GitHub repo
5. Configure:
   - Build: `pip install -r requirements.txt`
   - Start: `uvicorn main:app --host 0.0.0.0 --port $PORT`
6. Deploy!

**You'll get a URL like:**
```
https://urdu-phishing-api.onrender.com
```

**Send me this URL!**

---

## 🔄 Integration Flow

```
My Frontend (localhost:5173)
    ↓
    | POST /api/analyze
    | { "message": "..." }
    ↓
Your Backend (localhost:8000)
    ↓
    | Process with ML Model
    ↓
Your Backend Response
    ↓
    | { "label": "PHISHING", "confidence": 0.89 }
    ↓
My Frontend Shows Result
```

---

## 📝 What I Need From You

### Phase 1: Local Testing
✅ **Backend running locally on port 8000**  
✅ **Endpoint `/api/analyze` working**  
✅ **CORS configured**  
✅ **Test curl command successful**

**Tell me:** "Backend is ready for local testing"

### Phase 2: Production
✅ **Backend deployed to Render/Railway**  
✅ **Production URL (e.g., https://urdu-phishing-api.onrender.com)**  
✅ **CORS updated with production frontend URL**  
✅ **Tested and working**

**Tell me:** "Backend is live at [URL]"

---

## 🧪 Testing Together

Once your backend is ready locally:

1. **You run:** `python main.py` (port 8000)
2. **I update my `.env`:**
   ```
   VITE_API_URL=http://localhost:8000
   VITE_ENABLE_MOCK_API=false
   ```
3. **I run:** `npm run dev` (port 5173)
4. **We test:** I enter message → scan → see your ML result!

---

## 💰 Hosting Costs

**Free Tier (Recommended to Start):**
- Render.com: Free (sleeps after 15min idle)
- Or Railway.app: Free tier
- Or PythonAnywhere: Free tier

**Paid (When we get users):**
- Render.com: $7/month (no sleep, better performance)

---

## 📁 Code Template

I've created a complete backend template in:
**`DEPLOYMENT_AND_INTEGRATION_GUIDE.md`**

It includes:
- Full FastAPI code
- CORS setup
- Model loading
- Error handling
- Deployment steps

**Check the guide for copy-paste code!**

---

## 🆘 If You Get Stuck

**Common Issues:**

1. **CORS Error:**
   - Add my frontend URL to `allow_origins`
   - Use `*` for testing (not production!)

2. **Model Not Loading:**
   - Check file path
   - Use `pickle.load()` correctly
   - Ensure model.pkl is in repo

3. **Port Issues:**
   - Use `0.0.0.0` not `127.0.0.1`
   - Check firewall

**Ask me anytime!**

---

## ⏱️ Timeline

| When | What | Who |
|------|------|-----|
| **Today** | You: Create backend locally | Sibghat |
| **Today** | Me: Test with your local backend | Zaryab |
| **Tomorrow** | You: Deploy to Render | Sibghat |
| **Tomorrow** | Me: Update config & deploy frontend | Zaryab |
| **Day 3** | Both: Test end-to-end | Both |
| **Day 4-5** | Fix bugs, optimize | Both |
| **Day 6** | 🚀 LAUNCH | Both |

---

## 📞 Keep Me Updated

**When you finish each step, message me:**

✅ "Local backend working - test at localhost:8000"  
✅ "Backend deployed - live at [URL]"  
✅ "CORS configured for your frontend"  
✅ "Ready for production testing"

---

## 🎯 Our Goal

```
User searches Google → Finds our site → Enters message → Gets result
                                     ↑
                              WE'RE ALMOST THERE!
```

**You handle:** Backend API + ML Model  
**I handle:** Frontend + Deployment  
**Together:** We launch! 🚀

---

**Questions? Issues? Stuck?**  
Message me anytime! Let's ship this! 💪

**Start with:** Read `DEPLOYMENT_AND_INTEGRATION_GUIDE.md` for full details!
