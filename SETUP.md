# Setup Guide

This guide will help you set up the Urdu Phishing Detector project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher) - [Download](https://nodejs.org/)
- **Python** (v3.8 or higher) - [Download](https://www.python.org/downloads/)
- **npm** (comes with Node.js)
- **Git** - [Download](https://git-scm.com/downloads)

## Step-by-Step Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ZaryabKhattak/Urdu-Phishing-Detector-.git
cd Urdu-Phishing-Detector-
```

### 2. Frontend Setup

```bash
# Install frontend dependencies
npm install

# Create environment file (optional)
cp .env.example .env
```

### 3. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Create a virtual environment (recommended)
python3 -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt

# Return to root directory
cd ..
```

## Running the Application

### Option 1: Run Frontend and Backend Separately

**Terminal 1 - Backend:**
```bash
cd backend
# Activate virtual environment if not already active
source venv/bin/activate  # or venv\Scripts\activate on Windows
python app.py
```
Backend will run on: http://localhost:5000

**Terminal 2 - Frontend:**
```bash
npm run dev
```
Frontend will run on: http://localhost:3000

### Option 2: Development Mode

For development with hot-reload:

1. Start backend (follow Terminal 1 above)
2. In another terminal, run: `npm run dev`

## Building for Production

### Frontend Build

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Testing

### Frontend Linting

```bash
npm run lint
```

## Common Issues

### Port Already in Use

If you get "port already in use" errors:

**Frontend (port 3000):**
- Change the port in `vite.config.js`
- Or kill the process using port 3000

**Backend (port 5000):**
- Change the PORT in your `.env` file
- Or update `backend/app.py` to use a different port

### Python Dependencies Installation Fails

If you encounter issues installing Python packages:

```bash
# Try upgrading pip first
pip install --upgrade pip

# Then try installing dependencies again
pip install -r requirements.txt
```

### Module Not Found Errors

If you get "module not found" errors:

**Frontend:**
```bash
# Remove node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Backend:**
```bash
# Make sure virtual environment is activated
# Reinstall requirements
pip install -r requirements.txt
```

## Environment Variables

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

### Backend (backend/.env)

Create a `.env` file in the backend directory:

```env
PORT=5000
FLASK_ENV=development
MODEL_PATH=./models/phishing_model.h5
```

## Next Steps

1. Read [CONTRIBUTING.md](CONTRIBUTING.md) to learn how to contribute
2. Check the [README.md](README.md) for project overview
3. Explore the codebase and start developing!

## Getting Help

If you encounter issues not covered here:
1. Check existing GitHub issues
2. Create a new issue with details about your problem
3. Include your OS, Node version, Python version, and error messages

## Additional Resources

- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Flask Documentation](https://flask.palletsprojects.com/)
- [Python Virtual Environments](https://docs.python.org/3/tutorial/venv.html)
