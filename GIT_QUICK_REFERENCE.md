# Git Workflow Quick Reference

Visual guide for daily Git operations.

## 📊 Visual Workflow

### Complete Development Cycle

```
┌─────────────────────────────────────────────────────────────┐
│                     START YOUR DAY                           │
└────────────────────┬────────────────────────────────────────┘
                     │
                     ▼
            ┌────────────────┐
            │  git checkout  │
            │      dev       │
            │  git pull      │
            │   origin dev   │
            └────────┬───────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Create Feature      │
         │   Branch              │
         │                       │
         │  git checkout -b      │
         │  feature/my-feature   │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Make Changes        │
         │   - Edit files        │
         │   - Add features      │
         │   - Fix bugs          │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Stage Changes       │
         │                       │
         │   git add .           │
         │   or                  │
         │   git add file.js     │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Commit              │
         │                       │
         │   git commit -m       │
         │   "feat: description" │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Push to GitHub      │
         │                       │
         │   git push -u origin  │
         │   feature/my-feature  │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Create Pull         │
         │   Request on GitHub   │
         │   Request Review      │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Code Review         │
         │   - Teammate reviews  │
         │   - Discuss changes   │
         │   - Request changes   │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Merge to Dev        │
         │   (via GitHub)        │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Update Local Dev    │
         │                       │
         │   git checkout dev    │
         │   git pull origin dev │
         └───────────┬───────────┘
                     │
                     ▼
         ┌───────────────────────┐
         │   Delete Feature      │
         │   Branch              │
         │                       │
         │   git branch -d       │
         │   feature/my-feature  │
         └───────────────────────┘
```

---

## 🌳 Branch Structure

```
main (production)
  │
  │  git merge dev (when ready for release)
  │
  ├─── dev (development)
  │      │
  │      ├─── feature/add-navbar ───┐
  │      │                           │ (Zaryab working)
  │      │                           ▼
  │      │                    ┌──────────┐
  │      │                    │ git push │
  │      │                    │ PR created│
  │      │                    │ Review   │
  │      │                    │ Merge    │
  │      │                    └────┬─────┘
  │      │◄────────────────────────┘
  │      │
  │      ├─── feature/implement-ai ┐
  │      │                          │ (Sibghat working)
  │      │                          ▼
  │      │                   ┌──────────┐
  │      │                   │ git push │
  │      │                   │ PR created│
  │      │                   │ Review   │
  │      │                   │ Merge    │
  │      │                   └────┬─────┘
  │      │◄───────────────────────┘
  │      │
  │      └─── fix/cors-error
  │
  └─── hotfix/critical-bug (emergency fixes)
```

---

## 🔄 Collaboration Flow

### Zaryab's Workflow
```
┌─────────────┐
│   Zaryab    │
│  Frontend   │
└──────┬──────┘
       │
       │ 1. Create feature branch
       ▼
┌──────────────┐
│ feature/add- │
│ contact-form │
└──────┬───────┘
       │
       │ 2. Make changes
       │ 3. Commit
       │ 4. Push
       ▼
┌──────────────┐         ┌─────────────┐
│   GitHub     │────────►│   Sibghat   │
│   (PR #45)   │ Notify  │  Reviews    │
└──────┬───────┘         └──────┬──────┘
       │                        │
       │ 5. Approved           │ Review
       ▼                        ▼
┌──────────────┐         ┌─────────────┐
│ Merge to dev │         │  Comments   │
│              │         │  Suggestions│
└──────┬───────┘         └─────────────┘
       │
       │ 6. Pull latest
       ▼
┌──────────────┐
│  Zaryab's    │
│  local dev   │
└──────────────┘
```

### Sibghat's Workflow
```
┌─────────────┐
│  Sibghat    │
│   Backend   │
└──────┬──────┘
       │
       │ 1. Create feature branch
       ▼
┌──────────────┐
│ feature/     │
│ implement-ai │
└──────┬───────┘
       │
       │ 2. Make changes
       │ 3. Commit
       │ 4. Push
       ▼
┌──────────────┐         ┌─────────────┐
│   GitHub     │────────►│   Zaryab    │
│   (PR #46)   │ Notify  │  Reviews    │
└──────┬───────┘         └──────┬──────┘
       │                        │
       │ 5. Approved           │ Review
       ▼                        ▼
┌──────────────┐         ┌─────────────┐
│ Merge to dev │         │  Comments   │
│              │         │  Suggestions│
└──────┬───────┘         └─────────────┘
       │
       │ 6. Pull latest
       ▼
┌──────────────┐
│  Sibghat's   │
│  local dev   │
└──────────────┘
```

---

## 📝 Command Sequences

### Start New Feature
```bash
┌──────────────────────────────────────┐
│ 1. Update dev                         │
│    git checkout dev                   │
│    git pull origin dev                │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ 2. Create feature branch              │
│    git checkout -b feature/my-feature │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ 3. Make changes                       │
│    (edit files)                       │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ 4. Save progress                      │
│    git add .                          │
│    git commit -m "feat: description"  │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ 5. Push to GitHub                     │
│    git push -u origin feature/...     │
└──────────────────────────────────────┘
```

### Daily Sync
```bash
┌──────────────────────────────────────┐
│ Morning                               │
│ git checkout dev                      │
│ git pull origin dev                   │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ Work on your feature                  │
│ git checkout feature/my-feature       │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ Sync with latest dev (if needed)      │
│ git merge dev                         │
│ (resolve conflicts if any)            │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ Continue working                      │
│ git add .                             │
│ git commit -m "message"               │
│ git push origin feature/my-feature    │
└──────────────────────────────────────┘
```

### Finish Feature
```bash
┌──────────────────────────────────────┐
│ 1. Push final changes                 │
│    git push origin feature/my-feature │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ 2. Create Pull Request on GitHub      │
│    - Base: dev                        │
│    - Compare: feature/my-feature      │
│    - Request review                   │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ 3. Wait for review & approval          │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ 4. Merge via GitHub                   │
└─────────────┬────────────────────────┘
              ▼
┌──────────────────────────────────────┐
│ 5. Update local                       │
│    git checkout dev                   │
│    git pull origin dev                │
│    git branch -d feature/my-feature   │
└──────────────────────────────────────┘
```

---

## 🚨 Conflict Resolution

```
You: git pull origin dev
Git: CONFLICT in Contact.jsx

         ┌─────────────────────┐
         │  Open Contact.jsx   │
         └──────────┬──────────┘
                    ▼
         ┌─────────────────────┐
         │  Find conflict      │
         │  markers:           │
         │  <<<<<<< HEAD       │
         │  Your code          │
         │  =======            │
         │  Their code         │
         │  >>>>>>> dev        │
         └──────────┬──────────┘
                    ▼
         ┌─────────────────────┐
         │  Decide what to     │
         │  keep:              │
         │  - Your changes     │
         │  - Their changes    │
         │  - Both (merge)     │
         │  - Neither (new)    │
         └──────────┬──────────┘
                    ▼
         ┌─────────────────────┐
         │  Remove conflict    │
         │  markers            │
         │  Save file          │
         └──────────┬──────────┘
                    ▼
         ┌─────────────────────┐
         │  git add            │
         │  Contact.jsx        │
         └──────────┬──────────┘
                    ▼
         ┌─────────────────────┐
         │  git commit -m      │
         │  "merge: resolve    │
         │  conflicts"         │
         └──────────┬──────────┘
                    ▼
         ┌─────────────────────┐
         │  git push origin    │
         │  your-branch        │
         └─────────────────────┘
```

---

## 🎯 Decision Tree: When to Use What

```
Need to save work?
├─── Yes
│    └─── Changes complete?
│         ├─── Yes
│         │    └─── git add . && git commit -m "message"
│         └─── No (work in progress)
│              └─── git stash
└─── No
     └─── Continue working

Ready to share?
├─── Yes
│    └─── Feature complete?
│         ├─── Yes
│         │    └─── git push && Create PR
│         └─── No
│              └─── git push (save progress)
└─── No
     └─── Keep working locally

Need teammate's changes?
├─── Yes
│    └─── git pull origin dev
└─── No
     └─── Continue on your branch

Found a bug?
├─── Critical (production broken)
│    └─── Create hotfix branch from main
└─── Normal bug
     └─── Create fix branch from dev

Want to try something experimental?
└─── Create experimental branch
     ├─── Works? → Merge to dev
     └─── Doesn't work? → Delete branch
```

---

## 📋 Cheat Sheet

### Most Used Commands

```bash
# Daily workflow
git status                    # Check what changed
git pull origin dev          # Get latest changes
git add .                    # Stage all changes
git commit -m "message"      # Save changes
git push origin branch       # Upload to GitHub

# Branch management
git branch                   # List branches
git checkout branch-name     # Switch branch
git checkout -b new-branch   # Create & switch
git branch -d branch-name    # Delete branch

# Undo operations
git reset --soft HEAD~1      # Undo commit, keep changes
git checkout -- file.js      # Discard file changes
git stash                    # Save changes for later
git stash pop                # Restore stashed changes

# Viewing history
git log --oneline -10        # Last 10 commits
git diff                     # See unstaged changes
git diff --staged            # See staged changes
```

### Git Status Meanings

```bash
git status

# Untracked files (new files)
? file.js                    # Not in Git yet

# Changes not staged
M file.js                    # Modified
D file.js                    # Deleted

# Changes staged (ready to commit)
A file.js                    # Added
M file.js                    # Modified
D file.js                    # Deleted
R file.js                    # Renamed

# Current branch
On branch feature/my-feature
```

---

## 🔄 Integration Testing Flow

```
┌─────────────────────────────────────────────────────────┐
│              Sibghat Finishes Backend                    │
│  git commit -m "feat: add analyze endpoint"             │
│  git push origin dev                                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ Notification
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Zaryab Pulls Backend                        │
│  cd urdu-phishing-backend                               │
│  git pull origin dev                                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ Test locally
                     ▼
┌─────────────────────────────────────────────────────────┐
│           Zaryab Updates Frontend                        │
│  cd urdu-phishing-detector-frontend                     │
│  (update .env with backend URL)                         │
│  (test integration)                                      │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ If working
                     ▼
┌─────────────────────────────────────────────────────────┐
│           Zaryab Commits Frontend Changes                │
│  git add .                                               │
│  git commit -m "feat: integrate with backend API"       │
│  git push origin dev                                     │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ Both create PRs
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Review Each Other's Code                    │
│  - Sibghat reviews Zaryab's PR                          │
│  - Zaryab reviews Sibghat's PR                          │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ Approved
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Both Merge to Dev                           │
│  Test integration again                                  │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ Ready for production
                     ▼
┌─────────────────────────────────────────────────────────┐
│              Merge Dev to Main                           │
│  git checkout main                                       │
│  git merge dev                                           │
│  git push origin main                                    │
│  git tag v1.0.0                                          │
└─────────────────────────────────────────────────────────┘
```

---

## 💡 Pro Tips

### For Zaryab
```bash
# Check if Sibghat made changes before you start
git fetch origin
git log dev..origin/dev  # See commits you don't have

# Work on multiple features
git stash                 # Save current work
git checkout other-branch # Switch
git stash pop            # Restore work
```

### For Sibghat
```bash
# See what Zaryab changed in frontend
cd urdu-phishing-detector-frontend
git log --oneline -5
git show commit-hash     # See specific changes

# Test frontend changes
git checkout dev
npm run dev             # Test locally
```

### For Both
```bash
# Better commit messages
git commit              # Opens editor for detailed message
# First line: Short summary
# Blank line
# Detailed description

# Amend last commit (before pushing)
git commit --amend      # Fix message or add forgotten files

# See beautiful graph
git log --graph --oneline --all --decorate
```

---

**Remember: These are guidelines, not rules. Adapt to what works best for your team! 🚀**
