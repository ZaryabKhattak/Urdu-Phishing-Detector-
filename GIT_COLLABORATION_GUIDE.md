# Git & GitHub Collaboration Guide

Complete guide for collaborative development using Git and GitHub for the Urdu Phishing Detector project.

## Table of Contents
- [Overview](#overview)
- [Initial Setup](#initial-setup)
- [Repository Structure](#repository-structure)
- [Workflow for Each Developer](#workflow-for-each-developer)
- [Branch Strategy](#branch-strategy)
- [Common Commands](#common-commands)
- [Collaboration Workflow](#collaboration-workflow)
- [Handling Conflicts](#handling-conflicts)
- [Best Practices](#best-practices)
- [Troubleshooting](#troubleshooting)

---

## Overview

### Project Structure
```
GitHub Organization or Personal Account
│
├── urdu-phishing-detector-frontend (This repo - Zaryab manages)
│   ├── Main branch (production-ready code)
│   ├── Dev branch (development work)
│   └── Feature branches (new features)
│
└── urdu-phishing-detector-backend (New repo - Sibghat manages)
    ├── Main branch (production-ready code)
    ├── Dev branch (development work)
    └── Feature branches (new features)
```

### Collaboration Model
- **Option 1**: Monorepo (both frontend & backend in one repo)
- **Option 2**: Separate repos (recommended - easier to manage)

---

## Initial Setup

### Prerequisites

Both developers need:
```bash
# Check if Git is installed
git --version

# If not installed, download from: https://git-scm.com/
```

### Configure Git (One-time setup)

**Zaryab:**
```bash
git config --global user.name "Zaryab Khattak"
git config --global user.email "zaryab9339@gmail.com"

# Verify
git config --list
```

**Sibghat:**
```bash
git config --global user.name "Sibghat Ullah"
git config --global user.email "sibghat@example.com"  # Use your email

# Verify
git config --list
```

---

## For Zaryab Khattak (Frontend - Repository Owner)

### Step 1: Create GitHub Repository

1. **Go to GitHub**: https://github.com
2. **Click**: "New Repository"
3. **Settings**:
   - Repository name: `urdu-phishing-detector-frontend`
   - Description: `AI-powered phishing detection for Urdu text - Frontend`
   - Visibility: Private or Public
   - ✅ Initialize with README (optional)
   - ✅ Add .gitignore: Node
   - ❌ Don't add license yet (add later if needed)
4. **Click**: "Create repository"

### Step 2: Initialize Local Repository

```bash
# Navigate to your project
cd "c:\Users\zarya\OneDrive\Desktop\Everything\Cyber Project\urdu-phishing-detector-frontend"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Frontend setup with corporate-level architecture"

# Link to GitHub (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/urdu-phishing-detector-frontend.git

# Verify remote
git remote -v

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 3: Create Development Branch

```bash
# Create and switch to dev branch
git checkout -b dev

# Push dev branch to GitHub
git push -u origin dev
```

### Step 4: Invite Sibghat as Collaborator

1. **Go to repository** on GitHub
2. **Click**: "Settings"
3. **Click**: "Collaborators" (left sidebar)
4. **Click**: "Add people"
5. **Enter**: Sibghat's GitHub username or email
6. **Send invitation**

### Step 5: Protect Main Branch

1. **Go to**: Settings → Branches
2. **Add rule** for `main` branch:
   - ✅ Require pull request before merging
   - ✅ Require approvals (at least 1)
   - ✅ Require status checks to pass
3. **Save changes**

### Step 6: Set Up GitHub Project Board (Optional but Recommended)

1. **Go to**: "Projects" tab
2. **Create**: New project
3. **Columns**:
   - To Do
   - In Progress
   - Review
   - Done

---

## For Sibghat Ullah (Backend - Contributor)

### Step 1: Accept Collaboration Invitation

1. **Check email** for GitHub invitation
2. **Click**: Accept invitation
3. **Verify**: You have access to repository

### Step 2: Clone Frontend Repository (To understand structure)

```bash
# Clone the frontend (for reference)
git clone https://github.com/ZARYAB_USERNAME/urdu-phishing-detector-frontend.git

# Navigate
cd urdu-phishing-detector-frontend

# Check branches
git branch -a

# Switch to dev branch
git checkout dev
```

### Step 3: Create Backend Repository

1. **Create own repository**: `urdu-phishing-detector-backend`
2. **Initialize locally**:

```bash
# Create backend directory
mkdir urdu-phishing-backend
cd urdu-phishing-backend

# Initialize
git init

# Create basic structure
mkdir -p app/{routes,models,schemas,utils}
mkdir models tests docs

# Create README
echo "# Urdu Phishing Detector - Backend" > README.md

# Add .gitignore for Python
# (Copy from: https://github.com/github/gitignore/blob/main/Python.gitignore)

# Commit
git add .
git commit -m "Initial commit: Backend structure setup"

# Link to GitHub
git remote add origin https://github.com/SIBGHAT_USERNAME/urdu-phishing-detector-backend.git

# Push
git branch -M main
git push -u origin main
```

### Step 4: Invite Zaryab as Collaborator

1. **Go to**: Your backend repository
2. **Settings** → **Collaborators**
3. **Add**: Zaryab's GitHub username

---

## Branch Strategy

### Branch Types

```
main (production)
│
├── dev (development)
│   │
│   ├── feature/add-navbar-home-link
│   ├── feature/improve-api-service
│   ├── fix/cors-error
│   └── hotfix/critical-bug
```

### Branch Naming Convention

```bash
# Features
feature/description-in-kebab-case
feature/add-contact-form
feature/improve-error-handling

# Bug fixes
fix/description-in-kebab-case
fix/navbar-hover-effect
fix/api-timeout-error

# Hotfixes (critical production bugs)
hotfix/critical-description
hotfix/security-vulnerability

# Documentation
docs/description
docs/update-readme
docs/add-api-documentation
```

---

## Daily Workflow

### Zaryab's Daily Workflow (Frontend)

#### Morning Routine
```bash
# 1. Navigate to project
cd "c:\Users\zarya\OneDrive\Desktop\Everything\Cyber Project\urdu-phishing-detector-frontend"

# 2. Switch to dev branch
git checkout dev

# 3. Pull latest changes (in case Sibghat made changes)
git pull origin dev

# 4. Check status
git status

# 5. See what changed
git log --oneline -5
```

#### Working on a New Feature
```bash
# 1. Create feature branch from dev
git checkout dev
git pull origin dev
git checkout -b feature/add-linkedin-links

# 2. Make your changes
# Edit files...

# 3. Check what changed
git status
git diff

# 4. Stage changes
git add .
# Or stage specific files
git add src/pages/Contact.jsx

# 5. Commit with descriptive message
git commit -m "feat: add LinkedIn links to contact page

- Added LinkedIn profile links for both founders
- Updated team section with clickable links
- Improved contact page layout"

# 6. Push to GitHub
git push -u origin feature/add-linkedin-links
```

#### Creating Pull Request
1. **Go to GitHub** repository
2. **Click**: "Pull requests" → "New pull request"
3. **Base**: `dev` ← **Compare**: `feature/add-linkedin-links`
4. **Title**: "Add LinkedIn links to contact page"
5. **Description**:
   ```markdown
   ## Changes
   - Added LinkedIn profile links for Sibghat and Zaryab
   - Improved contact page layout
   - Updated team information
   
   ## Screenshots
   [Attach screenshots]
   
   ## Testing
   - [x] Tested locally
   - [x] Links open in new tab
   - [x] Mobile responsive
   
   @sibghat-username Please review!
   ```
6. **Click**: "Create pull request"
7. **Request review** from Sibghat

#### After Review Approval
```bash
# Merge via GitHub interface, then:

# 1. Switch to dev
git checkout dev

# 2. Pull merged changes
git pull origin dev

# 3. Delete feature branch locally
git branch -d feature/add-linkedin-links

# 4. Delete remote branch (or via GitHub)
git push origin --delete feature/add-linkedin-links
```

### Sibghat's Daily Workflow (Backend)

#### Morning Routine
```bash
# 1. Navigate to backend
cd urdu-phishing-backend

# 2. Switch to dev
git checkout dev

# 3. Pull latest
git pull origin dev

# 4. Check frontend updates (optional)
cd ../urdu-phishing-detector-frontend
git pull origin dev
```

#### Working on Backend Feature
```bash
# 1. Create feature branch
cd urdu-phishing-backend
git checkout dev
git pull origin dev
git checkout -b feature/implement-ai-model

# 2. Make changes
# Create app/models/phishing_model.py
# Implement AI model loading and prediction

# 3. Stage and commit
git add app/models/phishing_model.py
git commit -m "feat: implement AI model for phishing detection

- Created PhishingDetector class
- Implemented text preprocessing for Urdu
- Added model loading from h5 file
- Implemented prediction method with confidence score"

# 4. Push
git push -u origin feature/implement-ai-model
```

#### Creating Pull Request
Same as Zaryab's process, but:
- Create PR from `feature/implement-ai-model` → `dev`
- Request review from Zaryab

---

## Collaboration Workflow

### Scenario 1: Sibghat Needs Frontend Code

```bash
# Sibghat clones/pulls frontend to see API integration
cd urdu-phishing-detector-frontend
git checkout dev
git pull origin dev

# Check the API service
cat src/services/apiService.js

# Understand the expected request/response format
```

### Scenario 2: Zaryab Needs Backend Code

```bash
# Zaryab clones/pulls backend to understand API
cd urdu-phishing-backend
git checkout dev
git pull origin dev

# Check backend routes
cat app/routes/analyze.py

# Test locally
uvicorn app.main:app --reload
```

### Scenario 3: Working on Related Features

**Communication is key!**

1. **Before starting**:
   ```
   Zaryab: "I'm updating the API service to handle new error codes"
   Sibghat: "Perfect! I'm implementing those error codes in the backend"
   ```

2. **Create branches**:
   - Zaryab: `feature/handle-new-error-codes` (frontend)
   - Sibghat: `feature/implement-error-codes` (backend)

3. **Coordinate**:
   - Share commits via GitHub
   - Review each other's code
   - Test integration together

4. **Merge**:
   - Both merge to respective `dev` branches
   - Test integration
   - Merge to `main` when ready

---

## Code Review Process

### When You Create a Pull Request

**Include:**
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [x] New feature
- [ ] Breaking change
- [ ] Documentation update

## Changes Made
- Added LinkedIn links
- Updated contact form
- Fixed navbar hover effect

## Testing
- [x] Tested locally
- [x] No console errors
- [x] Mobile responsive
- [ ] Tested with backend (if applicable)

## Screenshots
[Add screenshots]

## Checklist
- [x] Code follows project standards
- [x] Comments added for complex logic
- [x] No console.logs left in code
- [x] Tested on multiple browsers

## Related Issues
Closes #123
Related to #456
```

### When Reviewing a Pull Request

**Check:**
- ✅ Code quality (follows CODE_STANDARDS.md)
- ✅ No bugs introduced
- ✅ Proper error handling
- ✅ Documentation updated
- ✅ No merge conflicts
- ✅ Tests pass (if applicable)

**Comment template:**
```markdown
## Review

### Looks Good ✅
- Clean code structure
- Good error handling
- Proper documentation

### Suggestions 💡
- Consider adding PropTypes validation
- Could optimize this function with useMemo

### Questions ❓
- Why did you use setTimeout here instead of the API service?

### Changes Requested 🔴
- Please remove console.log statements
- Update README with new feature

Overall: Approve with minor changes / Request changes / Approve
```

---

## Handling Merge Conflicts

### When Conflicts Occur

```bash
# 1. You try to pull
git pull origin dev

# Git says: CONFLICT in src/pages/Contact.jsx

# 2. Check conflicted files
git status

# 3. Open conflicted file
# You'll see:
<<<<<<< HEAD
Your changes
=======
Sibghat's changes
>>>>>>> origin/dev

# 4. Resolve manually
# Keep what you need, remove conflict markers

# 5. Stage resolved file
git add src/pages/Contact.jsx

# 6. Commit
git commit -m "merge: resolve conflicts in Contact.jsx"

# 7. Push
git push origin dev
```

### Preventing Conflicts

1. **Pull frequently**:
   ```bash
   git pull origin dev
   ```

2. **Communicate**:
   ```
   Zaryab: "I'm working on Contact.jsx"
   Sibghat: "Ok, I'll work on About.jsx"
   ```

3. **Small, frequent commits**:
   - Better than one huge commit
   - Easier to merge

---

## Common Git Commands Cheat Sheet

### Basic Commands

```bash
# Check status
git status

# See what changed
git diff

# See commit history
git log --oneline -10

# See all branches
git branch -a

# Switch branch
git checkout branch-name

# Create and switch to new branch
git checkout -b new-branch-name

# Pull latest changes
git pull origin branch-name

# Push changes
git push origin branch-name

# Add files
git add .                    # All files
git add file.js              # Specific file
git add src/                 # Specific folder

# Commit
git commit -m "message"

# Undo last commit (keep changes)
git reset --soft HEAD~1

# Discard local changes
git checkout -- file.js      # Specific file
git reset --hard             # All files (CAREFUL!)

# Stash changes (save for later)
git stash
git stash pop                # Apply stashed changes

# Delete branch
git branch -d branch-name    # Local
git push origin --delete branch-name  # Remote

# View remote URLs
git remote -v

# Update remote URL
git remote set-url origin new-url
```

### Advanced Commands

```bash
# Interactive rebase (clean up commits)
git rebase -i HEAD~3

# Cherry-pick a commit
git cherry-pick commit-hash

# Find bugs with bisect
git bisect start
git bisect bad
git bisect good commit-hash

# See who changed what
git blame file.js

# Search commit messages
git log --grep="keyword"

# Undo pushed commit (create new commit)
git revert commit-hash
```

---

## Commit Message Convention

### Format
```
<type>: <subject>

<body>

<footer>
```

### Types
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Formatting, missing semicolons, etc
- `refactor`: Code restructuring
- `perf`: Performance improvement
- `test`: Adding tests
- `chore`: Maintenance

### Examples

**Good ✅**
```bash
git commit -m "feat: add LinkedIn links to contact page

- Added clickable LinkedIn profiles for both founders
- Links open in new tab with proper security attributes
- Updated team section layout

Closes #45"
```

**Bad ❌**
```bash
git commit -m "updated stuff"
git commit -m "fix"
git commit -m "changes"
```

---

## .gitignore Configuration

### Frontend .gitignore
Already created! Includes:
```gitignore
# Dependencies
node_modules/

# Environment
.env
.env.local
.env.production

# Build
dist/
build/

# IDE
.vscode/
.idea/

# OS
.DS_Store
Thumbs.db
```

### Backend .gitignore (Sibghat should create)
```gitignore
# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
env/
venv/
*.egg-info/

# Environment
.env
.env.local
.env.production

# Models (if large files)
*.h5
*.pkl
*.pth

# IDE
.vscode/
.idea/
*.swp

# OS
.DS_Store
Thumbs.db

# Logs
*.log
```

---

## GitHub Features to Use

### 1. Issues
Track bugs, features, and tasks

**Create Issue:**
```markdown
Title: Add error handling to API service

## Description
Need to implement proper error handling for API calls

## Tasks
- [ ] Handle network errors
- [ ] Handle timeout errors
- [ ] Display user-friendly messages

## Priority
High

## Assignee
@zaryab-khattak
```

### 2. Pull Request Templates

Create `.github/pull_request_template.md`:
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation

## Testing
- [ ] Tested locally
- [ ] No errors in console
- [ ] Follows code standards

## Screenshots
[Add screenshots if UI changes]

## Checklist
- [ ] Code reviewed
- [ ] Documentation updated
- [ ] Tests pass
```

### 3. GitHub Actions (CI/CD)

Create `.github/workflows/test.yml`:
```yaml
name: Test

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v2
      
      - name: Setup Node
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm install
      
      - name: Run build
        run: npm run build
```

---

## Integration Testing Workflow

### When Testing Together

1. **Sibghat pushes backend**:
   ```bash
   git add .
   git commit -m "feat: add /api/analyze endpoint"
   git push origin dev
   ```

2. **Sibghat notifies Zaryab**:
   ```
   "Backend updated! New endpoint ready:
   http://localhost:8000/api/analyze
   
   Test with:
   curl -X POST http://localhost:8000/api/analyze \
     -H 'Content-Type: application/json' \
     -d '{"message":"test"}'
   "
   ```

3. **Zaryab tests and updates frontend**:
   ```bash
   # Update .env
   VITE_API_URL=http://localhost:8000/api
   
   # Test
   npm run dev
   
   # If working, commit
   git add .
   git commit -m "feat: integrate with backend API"
   git push origin dev
   ```

4. **Both create PRs and review together**

---

## Deployment Coordination

### Before Deployment

```bash
# 1. Both merge to main
git checkout main
git pull origin main
git merge dev
git push origin main

# 2. Tag release
git tag -a v1.0.0 -m "Release version 1.0.0"
git push origin v1.0.0

# 3. Deploy
# Sibghat: Deploy backend
# Zaryab: Deploy frontend with production backend URL
```

---

## Best Practices

### Do's ✅

1. **Pull before starting work**
   ```bash
   git pull origin dev
   ```

2. **Commit frequently**
   - Small, focused commits
   - Clear commit messages

3. **Use branches**
   - Never commit directly to main
   - Use feature branches

4. **Review code**
   - Review each other's PRs
   - Provide constructive feedback

5. **Communicate**
   - Tag each other in PRs
   - Use GitHub issues
   - Schedule code review sessions

6. **Document**
   - Update README
   - Add comments for complex logic
   - Update API documentation

### Don'ts ❌

1. **Don't commit to main directly**
2. **Don't push .env files**
3. **Don't commit node_modules**
4. **Don't force push** unless you know what you're doing
5. **Don't ignore conflicts** - resolve properly
6. **Don't commit broken code**

---

## Troubleshooting

### Problem: Can't push to repository

```bash
# Solution: Pull first
git pull origin dev

# If conflicts, resolve and commit
git add .
git commit -m "merge: resolve conflicts"
git push origin dev
```

### Problem: Accidentally committed to wrong branch

```bash
# Solution: Move commit to correct branch
git log  # Copy commit hash

git checkout correct-branch
git cherry-pick commit-hash

git checkout wrong-branch
git reset --hard HEAD~1
```

### Problem: Need to undo last commit

```bash
# Undo but keep changes
git reset --soft HEAD~1

# Undo and discard changes (CAREFUL!)
git reset --hard HEAD~1
```

### Problem: Large files not pushing

```bash
# Solution: Use Git LFS
git lfs install
git lfs track "*.h5"  # For AI model files
git add .gitattributes
git commit -m "chore: add Git LFS for large files"
```

---

## Quick Reference Cards

### Zaryab's Daily Commands
```bash
# Morning
cd urdu-phishing-detector-frontend
git checkout dev
git pull origin dev

# Create feature
git checkout -b feature/my-feature

# Save work
git add .
git commit -m "feat: description"
git push -u origin feature/my-feature

# End of day
git push origin feature/my-feature
```

### Sibghat's Daily Commands
```bash
# Morning
cd urdu-phishing-backend
git checkout dev
git pull origin dev

# Create feature
git checkout -b feature/my-feature

# Save work
git add .
git commit -m "feat: description"
git push -u origin feature/my-feature

# Check frontend changes
cd ../urdu-phishing-detector-frontend
git pull origin dev
```

---

## Communication Templates

### Starting New Feature
```
Hey @sibghat,

I'm working on feature/add-contact-validation.
This will affect the Contact.jsx file.

Let me know if you're working on anything related!

Timeline: Should be done by EOD
```

### After Completing Feature
```
@sibghat

✅ Completed: feature/add-contact-validation
PR: #123

Please review when you have time.
Changes:
- Added email validation
- Added form error states
- Updated UI for error messages

Let me know if any changes needed!
```

### Found a Bug
```
@sibghat

🐛 Found issue in backend API

When I send empty message, getting 500 instead of 400.
Can you check the validation in analyze.py?

I've created issue #124 with details.
```

---

## Resources

### Learning Git
- **Official Docs**: https://git-scm.com/doc
- **Interactive Tutorial**: https://learngitbranching.js.org/
- **GitHub Guides**: https://guides.github.com/

### Tools
- **GitHub Desktop**: GUI for Git (easier for beginners)
- **GitKraken**: Visual Git client
- **VS Code Git**: Built-in Git support

---

## Summary

### Zaryab's Responsibilities
- ✅ Manage frontend repository
- ✅ Review Sibghat's frontend contributions
- ✅ Maintain main and dev branches
- ✅ Deploy frontend to production
- ✅ Document frontend changes

### Sibghat's Responsibilities
- ✅ Manage backend repository
- ✅ Review Zaryab's backend contributions (if any)
- ✅ Maintain backend branches
- ✅ Deploy backend to production
- ✅ Document API changes

### Shared Responsibilities
- ✅ Code reviews
- ✅ Communication
- ✅ Integration testing
- ✅ Documentation
- ✅ Following Git best practices

---

**Remember: Communication is more important than perfect Git usage! When in doubt, ask each other! 🤝**
