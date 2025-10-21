# Contributing to Urdu Phishing Detector

Thank you for your interest in contributing to the Urdu Phishing Detector project! This document provides guidelines for contributing to the project.

## Getting Started

1. **Fork the repository** and clone it to your local machine
2. **Install dependencies**:
   ```bash
   # Install frontend dependencies
   npm install
   
   # Install backend dependencies
   cd backend
   pip install -r requirements.txt
   ```

3. **Set up environment variables**:
   ```bash
   # Copy the example environment file
   cp .env.example .env
   # Edit .env with your configuration
   ```

## Development Workflow

1. **Create a new branch** for your feature or bugfix:
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make your changes** following the coding standards below

3. **Test your changes**:
   ```bash
   # Run frontend in development mode
   npm run dev
   
   # Run backend server
   cd backend
   python app.py
   ```

4. **Commit your changes** with clear, descriptive commit messages:
   ```bash
   git commit -m "Add feature: description of your changes"
   ```

5. **Push to your fork** and create a Pull Request

## Coding Standards

### Frontend (React)
- Use functional components with hooks
- Follow React best practices
- Keep components small and focused
- Write descriptive prop types/comments
- Use meaningful variable and function names

### Backend (Python)
- Follow PEP 8 style guide
- Write docstrings for functions and classes
- Handle errors appropriately
- Keep functions focused on a single task
- Add type hints where applicable

## Project Structure

```
├── src/                    # Frontend source code
│   ├── components/        # Reusable React components
│   ├── pages/            # Page components
│   ├── services/         # API services
│   └── utils/            # Utility functions
├── backend/               # Backend source code
│   ├── api/              # API routes
│   ├── models/           # ML models
│   └── utils/            # Backend utilities
└── public/               # Static assets
```

## Reporting Issues

When reporting issues, please include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable
- Your environment (OS, browser, Node version, Python version)

## Pull Request Process

1. Update the README.md with details of changes if needed
2. Ensure all tests pass
3. Update documentation as necessary
4. Request review from maintainers
5. Address any feedback from reviewers

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them get started
- Focus on constructive feedback
- Respect differing viewpoints and experiences

## Questions?

Feel free to open an issue for questions or reach out to the maintainers.

Thank you for contributing! 🎉
