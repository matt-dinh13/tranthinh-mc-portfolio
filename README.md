# Trần Thịnh - Bilingual MC Portfolio

A beautiful, modern, and minimalist portfolio website for Master of Ceremonies (MC) services, featuring Vietnamese as the primary language with English support.

## 🌟 Features

- **🇻🇳 Vietnamese as Primary Language** - Default language with professional translations
- **🌐 Bilingual Support** - Seamless language switching between Vietnamese and English
- **🎨 Warm Color Design** - Beautiful amber, orange, and red gradient theme
- **📱 Responsive Design** - Perfect experience on all devices
- **⚡ Fast Loading** - Optimized static site with CDN delivery
- **🎯 MC-Focused Content** - Tailored for wedding and event MC services

## 🚀 Live Website

**Production URL:** https://mcthinhtran-9ydzitoa6-matt-dinhs-projects.vercel.app

## 🛠️ Technology Stack

- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Styling:** Tailwind CSS (via CDN)
- **Icons:** Lucide React
- **Deployment:** Vercel
- **Version Control:** Git + GitHub

## 📁 Project Structure

```
mcthinhtran/
├── public/
│   └── index.html          # Main static website
├── out/                    # Build output directory
├── src/                    # Source code (Next.js components)
├── pages/                  # Next.js pages (for future development)
├── vercel.json            # Vercel deployment configuration
├── deploy.sh              # Deployment script
└── README.md              # This file
```

## 🚀 Deployment

### Quick Deploy
```bash
./deploy.sh
```

### Manual Deploy
```bash
# 1. Update the static site
cp public/index.html out/index.html

# 2. Commit and push to Git
git add .
git commit -m "Update portfolio"
git push origin main

# 3. Deploy to Vercel
npx vercel --prod
```

## 🌐 Language Support

### Vietnamese (Primary)
- Default language for all content
- Professional Vietnamese translations
- Cultural context and local references
- Vietnamese contact format (+84 phone numbers)

### English (Secondary)
- Complete English translations
- International client focus
- Professional terminology
- Global contact format

## 🎨 Design Features

- **Warm Color Palette:** Amber, orange, and red gradients
- **Modern Typography:** Clean, professional fonts
- **Smooth Animations:** CSS transitions and hover effects
- **Mobile-First:** Responsive design for all screen sizes
- **Accessibility:** Semantic HTML and keyboard navigation

## 📞 Contact Information

- **Phone:** +84 123 456 789
- **Email:** hello@tranthinh.com
- **Location:** Huế, Việt Nam
- **Social Media:** Facebook, Instagram, TikTok

## 🔧 Customization

To customize the website:

1. **Content:** Edit `public/index.html` for text changes
2. **Styling:** Modify CSS classes and Tailwind utilities
3. **Images:** Replace placeholder images with actual photos
4. **Contact Info:** Update phone, email, and social media links
5. **Colors:** Adjust the warm color palette in the CSS

## 📈 Future Enhancements

- [ ] Image gallery for portfolio events
- [ ] Blog section for MC tips and stories
- [ ] Contact form backend integration
- [ ] SEO optimization
- [ ] Analytics integration
- [ ] Multi-language URL routing (/vi/, /en/)

## 🤝 Contributing

This is a personal portfolio website. For suggestions or improvements, please contact the owner.

## 📄 License

© 2024 Trần Thịnh. All rights reserved.

---

**Built with ❤️ for the Vietnamese MC community**
