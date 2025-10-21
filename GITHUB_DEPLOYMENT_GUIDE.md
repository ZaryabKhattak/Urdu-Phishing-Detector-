# GitHub Deployment Guide

Complete step-by-step instructions for uploading the Urdu Phishing Detector frontend to GitHub.

**Date:** October 21, 2025  
**Project:** Urdu Phishing Detector Frontend  
**Owner:** Zaryab Khattak  
**Collaborator:** Sibghat Ullah

---

## 📋 Table of Contents

1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Step-by-Step GitHub Upload](#step-by-step-github-upload)
3. [Repository Setup](#repository-setup)
4. [First Push to GitHub](#first-push-to-github)
5. [Adding Collaborators](#adding-collaborators)
6. [Creating Dev Branch](#creating-dev-branch)
7. [Protecting Main Branch](#protecting-main-branch)
8. [Post-Upload Tasks](#post-upload-tasks)
9. [Troubleshooting](#troubleshooting)

---

## 🔍 Pre-Deployment Checklist

Before uploading to GitHub, ensure you have everything ready:

### ✅ Files to Check

- [ ] `.gitignore` file exists (prevents uploading sensitive files)
- [ ] `.env.example` exists (template for environment variables)
- [ ] `.env` is listed in `.gitignore` (protect your secrets!)
- [ ] `node_modules/` is listed in `.gitignore` (don't upload dependencies)
- [ ] All documentation files are present:
  - [ ] README.md
  - [ ] CODE_STANDARDS.md
  - [ ] PROJECT_STRUCTURE.md
  - [ ] BACKEND_INTEGRATION.md
  - [ ] GIT_COLLABORATION_GUIDE.md
  - [ ] GIT_QUICK_REFERENCE.md
  - [ ] INTEGRATION_CHECKLIST.md
  - [ ] CHANGELOG.md

### ✅ Code Quality Check

```powershell
# Check if there are any obvious errors
npm run build

# If build succeeds, you're good to go!
# If it fails, fix errors before uploading
```

### ✅ Remove Sensitive Data

**CRITICAL:** Make sure NO sensitive information is in your code:

```powershell
# Search for potential secrets (run in project directory)
Select-String -Path .\src\* -Pattern "password|secret|token|api_key" -Recurse

# If you find any hardcoded secrets, remove them!
```

### ✅ GitHub Account Setup

- [ ] You have a GitHub account (free account is fine)
- [ ] You're logged into GitHub
- [ ] Git is installed on your computer

**Verify Git installation:**
```powershell
git --version
# Should show: git version 2.x.x
```

**If Git is not installed:**
1. Download from: https://git-scm.com/download/win
2. Install with default settings
3. Restart PowerShell
4. Run `git --version` again

---

## 🚀 Step-by-Step GitHub Upload

### Step 1: Initialize Git Repository Locally

Open PowerShell and navigate to your project:

```powershell
# Navigate to project directory
cd "c:\Users\zarya\OneDrive\Desktop\Everything\Cyber Project\urdu-phishing-detector-frontend"

# Verify you're in the correct directory
Get-Location
# Should show: C:\Users\zarya\OneDrive\Desktop\Everything\Cyber Project\urdu-phishing-detector-frontend

# List files to confirm
dir
# You should see: src, public, package.json, etc.
```

**Initialize Git:**

```powershell
# Initialize Git repository
git init

# You should see: "Initialized empty Git repository in..."
```

**Configure Git (if first time):**

```powershell
# Set your name (will appear in commits)
git config --global user.name "Zaryab Khattak"

# Set your email (use your GitHub email)
git config --global user.email "your.email@example.com"

# Verify configuration
git config --global --list
```

---

### Step 2: Review What Will Be Uploaded

```powershell
# Check status - see what files Git detects
git status

# You should see all your files listed in red
# This is normal - they're "untracked" files
```

**Verify .gitignore is working:**

```powershell
# Create a test .env file (if you don't have one)
echo "VITE_API_URL=http://localhost:8000" > .env

# Check status again
git status

# .env should NOT appear in the list
# If it does, your .gitignore isn't working
```

**If .gitignore isn't working:**

```powershell
# Make sure .gitignore exists
Get-Content .gitignore

# If it doesn't exist or is missing entries, create it:
@"
# Dependencies
node_modules/
.pnp
.pnp.js

# Testing
coverage/

# Production
build/
dist/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?

# OS files
Thumbs.db
Desktop.ini
"@ | Out-File -FilePath .gitignore -Encoding utf8
```

---

### Step 3: Stage All Files

```powershell
# Add all files to staging area
git add .

# Check what's staged
git status

# All files should now be green (staged)
# Verify node_modules and .env are NOT listed
```

**If you accidentally staged wrong files:**

```powershell
# Unstage everything
git reset

# Fix .gitignore
# Then add again
git add .
```

---

### Step 4: Create First Commit

```powershell
# Create your first commit with a detailed message
git commit -m "Initial commit: Corporate-level frontend architecture

- Implemented modular architecture (constants, services, hooks, utils)
- Created shared components (SharedNavbar, SharedFooter)
- Added PropTypes validation for type safety
- Reduced code duplication by 80%
- Fixed UX navigation issues
- Created 8 comprehensive documentation files
- Prepared environment configuration
- Ready for backend integration

Tech Stack:
- React 18.3.1
- Vite 5.4.8
- React Router DOM 6.28.0
- PropTypes 15.8.1

Team:
- Zaryab Khattak (Frontend/Design)
- Sibghat Ullah (Backend/AI)"

# You should see: "[main (root-commit) abc1234] Initial commit..."
# Followed by file count statistics
```

**Verify commit:**

```powershell
# View commit history
git log --oneline

# Should show your commit with the message
```

---

## 🌐 Repository Setup

Now create the GitHub repository:

### Step 5: Create Repository on GitHub

1. **Go to GitHub:**
   - Open browser: https://github.com
   - Log in to your account

2. **Create New Repository:**
   - Click green "New" button (top left)
   - OR: Click "+" icon (top right) → "New repository"

3. **Repository Settings:**

   ```
   Repository name: urdu-phishing-detector-frontend
   
   Description: 
   AI-powered Urdu Phishing Detection System - Frontend
   React-based web application for detecting phishing content in Urdu messages
   
   Visibility: 
   ○ Public (✓ Choose this - it's free and good for portfolio)
   ○ Private (Choose this if you want to keep it hidden)
   
   Initialize repository:
   ☐ Add a README file (LEAVE UNCHECKED - we already have one)
   ☐ Add .gitignore (LEAVE UNCHECKED - we already have one)
   ☐ Choose a license (SKIP for now - add later if needed)
   ```

4. **Click "Create repository"**

---

### Step 6: Connect Local to GitHub

After creating the repository, GitHub will show you instructions. **COPY YOUR REPOSITORY URL:**

```
https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend.git
```

**In PowerShell:**

```powershell
# Add GitHub as remote (replace YOUR-USERNAME with your actual GitHub username)
git remote add origin https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend.git

# Verify remote was added
git remote -v

# Should show:
# origin  https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend.git (fetch)
# origin  https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend.git (push)
```

**If you made a mistake:**

```powershell
# Remove the remote
git remote remove origin

# Add it again with correct URL
git remote add origin https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend.git
```

---

## 📤 First Push to GitHub

### Step 7: Push Your Code

```powershell
# Rename branch to 'main' (GitHub's default)
git branch -M main

# Push to GitHub
git push -u origin main

# You'll be prompted for credentials:
# Username: your-github-username
# Password: Use Personal Access Token (see below if needed)
```

**Authentication Issues?**

GitHub no longer accepts passwords for Git operations. You need a **Personal Access Token (PAT)**.

**Create a Personal Access Token:**

1. Go to GitHub → Click your profile picture → Settings
2. Scroll down → Click "Developer settings" (bottom left)
3. Click "Personal access tokens" → "Tokens (classic)"
4. Click "Generate new token" → "Generate new token (classic)"
5. Settings:
   ```
   Note: Urdu Phishing Detector Development
   Expiration: 90 days (or your preference)
   
   Select scopes:
   ✓ repo (all - this gives full repository access)
   ```
6. Click "Generate token"
7. **COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
8. Save it somewhere safe (password manager recommended)

**Use the token as your password when pushing:**

```powershell
git push -u origin main

# Username: your-github-username
# Password: [paste your token here]
```

**Success! 🎉**

You should see:
```
Enumerating objects: 45, done.
Counting objects: 100% (45/45), done.
Delta compression using up to 8 threads
Compressing objects: 100% (38/38), done.
Writing objects: 100% (45/45), 125.43 KiB | 5.02 MiB/s, done.
Total 45 (delta 5), reused 0 (delta 0), pack-reused 0
To https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend.git
 * [new branch]      main -> main
Branch 'main' set up to track remote branch 'main' from 'origin'.
```

**Verify Upload:**

1. Go to your GitHub repository: `https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend`
2. You should see all your files!
3. Check that README.md is displayed at the bottom
4. Verify sensitive files (.env, node_modules/) are NOT there

---

## 👥 Adding Collaborators

### Step 8: Invite Sibghat Ullah

1. **Go to Your Repository on GitHub**

2. **Click "Settings" tab** (top of repository page)

3. **Click "Collaborators" in left sidebar**
   - You may need to enter your password

4. **Click "Add people"**

5. **Search for Sibghat:**
   - Enter his GitHub username, email, or full name
   - Select the correct person

6. **Click "Add [username] to this repository"**

7. **Sibghat will receive an email invitation**
   - He needs to accept it to get access
   - Send him a message to check his email

**Permissions:**

Collaborators get "Write" access by default, which allows:
- ✓ Pushing code
- ✓ Creating branches
- ✓ Creating pull requests
- ✓ Merging PRs (you may want to restrict this)
- ✗ Deleting the repository
- ✗ Changing settings

---

## 🌿 Creating Dev Branch

### Step 9: Set Up Development Branch

Create a `dev` branch for ongoing development:

```powershell
# Create and switch to dev branch
git checkout -b dev

# Push dev branch to GitHub
git push -u origin dev

# Switch back to main
git checkout main
```

**Verify on GitHub:**

1. Go to your repository
2. Click the "main" dropdown (top left, near file list)
3. You should see both "main" and "dev" branches

**Set dev as default branch (recommended):**

1. Go to repository Settings → Branches
2. Change "Default branch" from "main" to "dev"
3. Click "Update"
4. Confirm the change

This makes "dev" the default for new PRs and clones.

---

## 🔒 Protecting Main Branch

### Step 10: Add Branch Protection Rules

Prevent accidental pushes directly to main:

1. **Go to Settings → Branches**

2. **Click "Add branch protection rule"**

3. **Configure Protection:**

   ```
   Branch name pattern: main
   
   ✓ Require a pull request before merging
     ✓ Require approvals: 1
     ☐ Dismiss stale pull request approvals (optional)
   
   ✓ Require status checks to pass before merging
     ☐ Require branches to be up to date (can be annoying for small team)
   
   ✓ Require conversation resolution before merging
   
   ✓ Include administrators (protects even you from direct pushes)
   ```

4. **Click "Create"**

**What this does:**
- No one can push directly to main (including you!)
- All changes must go through pull requests
- At least 1 person must approve the PR
- Ensures code review happens

---

## ✅ Post-Upload Tasks

### Step 11: Update Repository Settings

1. **Add Topics (helps people find your project):**
   - Go to repository main page
   - Click ⚙️ gear icon next to "About"
   - Add topics: `react`, `vite`, `phishing-detection`, `urdu`, `ai`, `machine-learning`, `cybersecurity`
   - Save changes

2. **Add Website (optional):**
   - In the same "About" section
   - Add your deployed URL when ready

3. **Update README.md with Badges:**

   Add these to the top of your README.md:

   ```markdown
   # Urdu Phishing Detector - Frontend
   
   ![React](https://img.shields.io/badge/React-18.3.1-blue)
   ![Vite](https://img.shields.io/badge/Vite-5.4.8-purple)
   ![License](https://img.shields.io/badge/License-MIT-green)
   ![Status](https://img.shields.io/badge/Status-Active-success)
   
   [Rest of your README...]
   ```

   **Commit and push:**
   ```powershell
   git add README.md
   git commit -m "docs: add badges to README"
   git push origin main
   ```

---

### Step 12: Create GitHub Issues/Projects (Optional)

**Set up project tracking:**

1. **Go to "Issues" tab**
2. **Create initial issues:**

   - Issue #1: "Migrate existing pages to SharedNavbar component"
   - Issue #2: "Integrate with backend API"
   - Issue #3: "Add loading states to phishing detection"
   - Issue #4: "Implement error handling for API failures"

3. **Create Project Board:**
   - Click "Projects" tab → "New project"
   - Choose "Board" template
   - Columns: Todo, In Progress, Review, Done
   - Link issues to the project

---

## 📱 Share Repository with Sibghat

### Step 13: Send Information to Sibghat

**Create a message with:**

```
Hey Sibghat! 👋

I've uploaded the frontend to GitHub. Here's what you need:

📦 Repository: https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend

🔑 Access: I've sent you a collaborator invitation - check your email and accept it.

📚 Important Files to Read:
1. README.md - Project overview
2. PROJECT_STRUCTURE.md - Code organization
3. BACKEND_INTEGRATION.md - How to integrate your backend (2500+ lines!)
4. GIT_COLLABORATION_GUIDE.md - How we'll work together with Git
5. GIT_QUICK_REFERENCE.md - Quick Git commands

🚀 What to do next:
1. Accept the GitHub invitation
2. Clone the repository:
   git clone https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend.git
3. Read the BACKEND_INTEGRATION.md file
4. Create your backend repository
5. Follow the guide to set up the API

📋 Your Tasks (from INTEGRATION_CHECKLIST.md):
- Set up FastAPI backend
- Implement POST /api/analyze endpoint
- Configure CORS for http://localhost:5173
- Share your backend URL with me

Let me know when you've cloned the repo and read the integration guide!

- Zaryab
```

---

## 🔧 Troubleshooting

### Problem: "fatal: not a git repository"

**Solution:**
```powershell
# Make sure you're in the correct directory
cd "c:\Users\zarya\OneDrive\Desktop\Everything\Cyber Project\urdu-phishing-detector-frontend"

# Initialize Git
git init
```

---

### Problem: "remote origin already exists"

**Solution:**
```powershell
# Remove existing remote
git remote remove origin

# Add correct remote
git remote add origin https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend.git
```

---

### Problem: Authentication Failed

**Solutions:**

1. **Use Personal Access Token instead of password**
   - See "Create a Personal Access Token" section above

2. **Cache credentials (so you don't type token every time):**
   ```powershell
   git config --global credential.helper wincred
   ```

3. **Use GitHub Desktop (easier):**
   - Download: https://desktop.github.com/
   - Log in with GitHub account
   - Add existing repository
   - Push with GUI

---

### Problem: ".env file appears in git status"

**Solution:**
```powershell
# Stop tracking .env
git rm --cached .env

# Make sure .gitignore has .env
echo ".env" >> .gitignore

# Commit the change
git add .gitignore
git commit -m "fix: stop tracking .env file"
git push
```

---

### Problem: "node_modules uploaded to GitHub"

**Solution:**
```powershell
# Remove from Git (but keep locally)
git rm -r --cached node_modules

# Ensure .gitignore has node_modules/
echo "node_modules/" >> .gitignore

# Commit
git add .gitignore
git commit -m "fix: stop tracking node_modules"
git push

# To remove from GitHub entirely:
# 1. Delete from Git as above
# 2. Push the commit
# 3. If you want to remove from history (advanced):
#    This requires force pushing - ask if needed
```

---

### Problem: Commit has wrong author name/email

**Solution:**
```powershell
# Set correct name and email
git config --global user.name "Zaryab Khattak"
git config --global user.email "your.email@example.com"

# Amend last commit (if not pushed yet)
git commit --amend --reset-author --no-edit

# If already pushed, just make sure future commits are correct
```

---

### Problem: Accidentally committed sensitive data

**Solution:**

1. **Remove the file:**
   ```powershell
   git rm --cached sensitive-file.txt
   echo "sensitive-file.txt" >> .gitignore
   git commit -m "Remove sensitive file"
   git push
   ```

2. **If it contains passwords/keys, ROTATE THEM IMMEDIATELY**
   - Change all passwords
   - Regenerate all API keys
   - The data is still in Git history

3. **To remove from history (advanced):**
   ```powershell
   # This is complex - ask if you need help
   # It requires force pushing and may affect collaborators
   ```

---

### Problem: Large files causing push to fail

**Solution:**

```powershell
# GitHub has 100MB file size limit

# Find large files
Get-ChildItem -Recurse | Where-Object {$_.Length -gt 50MB} | Select-Object Name, Length, FullName

# Options:
# 1. Add to .gitignore (if not needed)
# 2. Use Git LFS (Large File Storage)
# 3. Store elsewhere (cloud storage) and link to it
```

---

## 📝 Quick Command Reference

### Initial Upload
```powershell
cd "path\to\project"
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

### Daily Workflow After Upload
```powershell
git status                      # Check changes
git add .                       # Stage changes
git commit -m "message"         # Commit
git push origin branch-name     # Push to GitHub
```

### Working with Branches
```powershell
git checkout -b feature-name    # Create branch
git push -u origin feature-name # Push branch
git checkout main               # Switch to main
git pull origin main            # Get latest main
```

---

## ✨ Success Checklist

After completing all steps:

- [ ] Repository created on GitHub
- [ ] All code pushed successfully
- [ ] .env and node_modules are NOT on GitHub
- [ ] Dev branch created
- [ ] Main branch protected
- [ ] Sibghat invited as collaborator
- [ ] Repository description added
- [ ] Topics added
- [ ] README displays correctly
- [ ] All documentation files visible
- [ ] Sibghat received invitation email
- [ ] Sibghat accepted invitation

**Congratulations! Your project is now on GitHub! 🎉**

---

## 🔗 Useful Links

- **Your Repository:** `https://github.com/YOUR-USERNAME/urdu-phishing-detector-frontend`
- **GitHub Docs:** https://docs.github.com/
- **Git Basics:** https://git-scm.com/doc
- **Personal Access Tokens:** https://github.com/settings/tokens
- **GitHub Desktop:** https://desktop.github.com/

---

## 📞 Need Help?

If you encounter issues not covered here:

1. Check the error message carefully
2. Search GitHub Docs: https://docs.github.com/
3. Search Stack Overflow with the error message
4. Check Git documentation: https://git-scm.com/doc

**Common search terms:**
- "git push authentication failed"
- "git remote origin already exists"
- "github collaborator permissions"
- "git branch protection rules"

---

**Remember:** Git and GitHub are powerful tools. Don't worry if you make mistakes - most things can be undone! 💪

**Last Updated:** October 21, 2025
