# Integration Testing Script

Test Sibghat's backend integration with your frontend.

---

## 🧪 Quick Test Commands

### **Test 1: Check Backend is Running**

```bash
curl http://localhost:5000/
```

**Expected Response:**
```json
{
  "status": "Urdu PhishGuard AI backend running"
}
```

✅ If you see this, backend is alive!

---

### **Test 2: Test Analyze Endpoint (Safe Message)**

```bash
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d "{\"message\":\"Hello how are you today\"}"
```

**Expected Response:**
```json
{
  "classification": "SAFE",
  "confidence": 95.2,
  "details": "No phishing patterns detected. Appears safe."
}
```

---

### **Test 3: Test Analyze Endpoint (Phishing Message)**

```bash
curl -X POST http://localhost:5000/api/analyze \
  -H "Content-Type: application/json" \
  -d "{\"message\":\"Aap ne 1 crore rupay jeeta hai! Is link par click karen urgent\"}"
```

**Expected Response:**
```json
{
  "classification": "PHISHING",
  "confidence": 89.7,
  "details": "This message shows strong phishing indicators."
}
```

---

## 🔄 Full Integration Test

### **Step 1: Start Backend (Sibghat)**

```bash
cd "C:\Users\zarya\OneDrive\Desktop\Everything\Cyber Project\urdu-phishguard-ai-backend2"

# Install dependencies (first time only)
pip install -r requirements.txt

# Run backend
python app.py
```

**Should see:**
```
 * Running on http://127.0.0.1:5000
🔁 Loading Urdu PhishGuard model...
```

**Keep this terminal open!**

---

### **Step 2: Start Frontend (Zaryab)**

**Open NEW terminal:**

```powershell
cd "C:\Users\zarya\OneDrive\Desktop\Everything\Cyber Project\urdu-phishing-detector-frontend"

# Install dependencies (if not already)
npm install

# Start dev server
npm run dev
```

**Should see:**
```
  VITE v5.4.8  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

---

### **Step 3: Test in Browser**

1. Open: http://localhost:5173
2. Enter a test message: `"Aap ne prize jeeta hai link click karen"`
3. Click "Scan for Scam"
4. Wait 2-3 seconds
5. See result with classification and confidence!

---

## ✅ Success Criteria

### **What Should Happen:**

1. ✅ Loading animation appears
2. ✅ Result card shows classification (SAFE/SUSPICIOUS/PHISHING)
3. ✅ Confidence percentage displays
4. ✅ Details message appears
5. ✅ No errors in browser console (F12)

### **Check Browser Console:**

Press **F12** → Console tab

**Should see:**
```
🔗 Calling API: http://localhost:5000/api/analyze
✅ Backend response: { classification: "PHISHING", confidence: 89.5, ... }
```

**Should NOT see:**
```
❌ Error analyzing message: ...
❌ CORS error
❌ Failed to fetch
```

---

## 🐛 Troubleshooting

### **Problem: "Cannot connect to backend server"**

**Check:**
1. Is backend running? (Look for Flask terminal)
2. Is it on port 5000? (Check terminal output)
3. Try: `curl http://localhost:5000/`

**Fix:**
```bash
# Restart backend
cd urdu-phishguard-ai-backend2
python app.py
```

---

### **Problem: CORS Error**

**Error in console:**
```
Access to fetch at 'http://localhost:5000' from origin 'http://localhost:5173' 
has been blocked by CORS policy
```

**Fix:**
Sibghat needs to check `app.py` has:
```python
from flask_cors import CORS
CORS(app)  # This line must be there!
```

---

### **Problem: Model Not Loading**

**Backend shows:**
```
Error loading model: ...
```

**Check:**
1. Does `model/` directory exist in backend?
2. Are model files present?
3. Is Hugging Face token set? (if using HF model)

**Temporary workaround:**
Use mock responses to test integration first!

---

### **Problem: Frontend shows "SCAM" instead of "PHISHING"**

**This is OK!** Some components use different labels. Both work.

---

## 📋 Test Cases

Test these messages:

### **1. Safe Message:**
```
"Hello, how are you? Hope you're having a great day!"
```
**Expected:** SAFE, 90%+ confidence

### **2. Suspicious Message:**
```
"Yaar prize mila hai check kar"
```
**Expected:** SUSPICIOUS or PHISHING, 60-80% confidence

### **3. Clear Phishing:**
```
"URGENT: Aap ka account block ho jayega! Is link par click karen abhi: bit.ly/scam123"
```
**Expected:** PHISHING, 80%+ confidence

### **4. Urdu Script:**
```
"آپ نے انعام جیت لیا ہے"
```
**Expected:** Depends on model training

### **5. Empty Message:**
```
""
```
**Expected:** Error message "Message cannot be empty"

---

## 🎯 Integration Checklist

- [ ] Backend starts without errors
- [ ] Health check endpoint works (`/`)
- [ ] Analyze endpoint works (`/api/analyze`)
- [ ] Frontend connects to backend
- [ ] Message analysis completes
- [ ] Classification displays correctly
- [ ] Confidence shows as percentage
- [ ] Details message appears
- [ ] Loading state works
- [ ] Error handling works
- [ ] No CORS errors
- [ ] No console errors

---

## 📊 Performance Check

**Response Time Should Be:**
- First request: 5-10 seconds (model loading)
- Subsequent requests: 1-3 seconds

**If slower:**
- Model might be loading from Hugging Face
- Check backend terminal for logs
- Normal for first use!

---

## 🚀 Ready for Production

Once local testing works:

1. **Sibghat:** Deploy backend to Render
2. **You:** Update `.env.production` with his URL
3. **You:** Deploy frontend to Vercel
4. **Both:** Test production deployment
5. **🎉 LAUNCH!**

---

**If all tests pass, you're ready to deploy!** 🚀
