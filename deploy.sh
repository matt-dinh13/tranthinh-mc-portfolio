#!/bin/bash

echo "🚀 Deploying Bilingual MC Portfolio..."

# Build the static site
echo "📦 Building static site..."
cp public/index.html out/index.html

# Commit and push to Git
echo "📝 Committing changes to Git..."
git add .
git commit -m "Update bilingual MC portfolio"
git push origin main

# Deploy to Vercel
echo "🌐 Deploying to Vercel..."
npx vercel --prod

echo "✅ Deployment complete!"
echo "🌍 Your site is live at: https://mcthinhtran-9ydzitoa6-matt-dinhs-projects.vercel.app"
