# Urdu Phishing Detector - Frontend

React + Vite frontend application for detecting phishing attempts in Roman Urdu messages.

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Navigate to the project folder:**
   ```powershell
   cd "c:\Users\zarya\OneDrive\Desktop\Everything\Cyber Project\urdu-phishing-detector-frontend"
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Start the development server:**
   ```powershell
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to: http://localhost:5173/

## 📦 Build for Production

```powershell
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🎨 Design System

### Colors
- **Primary (Teal):** #009D8D
- **White:** #FFFFFF
- **Black:** #000000
- **Background Gray:** #F5F5F5

### Fonts
- **Headings:** Inter (700)
- **Body Text:** Outfit (400, 500, 600)

## 🔌 Backend Integration

The app expects a backend API at `http://localhost:8000` with the following endpoint:

### POST /predict
**Request:**
```json
{
  "message": "Your Roman Urdu message here"
}
```

**Response:**
```json
{
  "label": "SAFE|SUSPICIOUS|PHISHING",
  "confidence": 0.92
}
```

To change the backend URL, edit `vite.config.js`:
```javascript
server: {
  proxy: {
    '/predict': {
      target: 'http://your-backend-url:port',
      changeOrigin: true,
    },
  },
}
```

## 📂 Project Structure

```
src/
├── components/       # Reusable UI components
│   ├── MainScreen.jsx
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── pages/           # Page components (About, Privacy, etc.)
├── services/        # API integration
│   └── api.js
├── assets/          # Static assets (CSS, images)
│   └── css/
├── App.jsx          # Main app component
└── main.jsx         # Entry point
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📝 Features

- ✅ Clean, modern UI matching Figma design
- ✅ Responsive layout
- ✅ Step-by-step visual indicator
- ✅ Real-time message scanning
- ✅ React Router for navigation
- ✅ Axios for API calls

## 🔗 Navigation

- **About** - Project information
- **Privacy Policy** - Data handling policies
- **Terms of Use** - Usage terms
- **Contact** - Contact information

## � Team

**Founders & Developers:**

- **Sibghat Ullah** - Founder & Cybersecurity Engineer  
  Envisioned and built the AI model for accurate phishing detection in Roman Urdu.

- **Zaryab Khattak** - Co-Founder & Product Designer  
  Managing the vision, design, and user experience of the platform.

## 📄 License

© 2025 Sibghat Ullah & Zaryab Khattak — Independent Developers

**Built by independent developers passionate about AI-powered cybersecurity awareness.**
