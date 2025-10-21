# Quick Start Guide

Get the Urdu Phishing Detector up and running in minutes!

## Prerequisites

- Node.js (v18+)
- Python (v3.8+)
- Git

## Installation (5 minutes)

```bash
# 1. Clone the repository
git clone https://github.com/ZaryabKhattak/Urdu-Phishing-Detector-.git
cd Urdu-Phishing-Detector-

# 2. Install frontend dependencies
npm install

# 3. Install backend dependencies
cd backend
pip install -r requirements.txt
cd ..
```

## Running the Application (2 terminals)

### Terminal 1 - Backend
```bash
cd backend
python app.py
```
✅ Backend running on http://localhost:5000

### Terminal 2 - Frontend
```bash
npm run dev
```
✅ Frontend running on http://localhost:3000

## Test the Application

1. Open http://localhost:3000 in your browser
2. Enter Urdu text in the input field
3. Click "Analyze Text"
4. View the results

## What's Next?

- Read [README.md](README.md) for project overview
- Check [SETUP.md](SETUP.md) for detailed setup instructions
- See [CONTRIBUTING.md](CONTRIBUTING.md) to start contributing
- Review the code structure in [src/](src/) and [backend/](backend/)

## Common Issues

**Port already in use?**
- Change ports in `vite.config.js` (frontend) or set `PORT` environment variable (backend)

**Dependencies not installing?**
- Update npm: `npm install -g npm@latest`
- Update pip: `pip install --upgrade pip`

**Backend errors?**
- Make sure Python 3.8+ is installed
- Check that all dependencies are installed: `pip install -r backend/requirements.txt`

## Need Help?

- Check [SETUP.md](SETUP.md) for detailed troubleshooting
- Open an issue on GitHub
- Review existing issues for solutions

Happy coding! 🚀
