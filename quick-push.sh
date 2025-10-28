#!/bin/bash
# 🚀 NAVIA - QUICK PUSH TO GITHUB
# Run these commands after creating your GitHub repository

# ============================================
# STEP 1: SETUP (One Time Only)
# ============================================

# Configure Git (replace with your info)
git config --global user.name "Your Name"
git config --global user.email "your.email@example.com"

# ============================================
# STEP 2: PREPARE REPOSITORY
# ============================================

cd navia-github-repo

# Initialize git
git init
git branch -m main

# ============================================
# STEP 3: COMMIT FILES
# ============================================

# Add all files
git add .

# Create commit
git commit -m "🎉 Initial commit: Navia v1.0.0

✨ Complete React Native flight tracking app
🧭 360° compass navigation system
🦅 Wingmate AI assistant
⚡ Automation workflows
📱 Responsive design for all devices
📚 Full documentation and setup guides"

# ============================================
# STEP 4: PUSH TO GITHUB
# ============================================

# Add your repository URL (replace YOUR_USERNAME)
git remote add origin https://github.com/YOUR_USERNAME/navia-app.git

# Push to GitHub
git push -u origin main

# ============================================
# DONE! 🎉
# ============================================

echo "✅ Your Navia app is now on GitHub!"
echo "📍 Visit: https://github.com/YOUR_USERNAME/navia-app"
