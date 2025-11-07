# Portfolio Setup Guide

## 🎯 Quick Start

Your portfolio is ready! Follow these steps to personalize and launch it.

## ✅ Step 1: Replace Images

### Profile Photo
1. Save your professional photo as `profile.jpg`
2. Replace `assets/profile.jpg` with your image
3. **Recommended**: Square format, minimum 400x400px, PNG or JPG

### Project Screenshots
Replace these placeholder images with actual project screenshots:
- `assets/project1.jpg` - E-Ration Shop screenshot
- `assets/project2.jpg` - AetherCare project screenshot
- `assets/project3.jpg` - Python applications screenshot
- `assets/project4.jpg` - Web development projects screenshot

**Tip**: Take high-quality screenshots (1200x800px recommended)

## ✅ Step 2: Update Project Links

In `index.html`, find each project card and update the links:

```html
<!-- Find this section for each project -->
<div class="project-overlay">
    <a href="https://your-live-demo.com" class="project-link">...</a>
    <a href="https://github.com/your-username/repo" class="project-github">...</a>
</div>
```

**Update**:
- `project-link` → Your live project URL
- `project-github` → Your GitHub repository URL

## ✅ Step 3: Update Social Media Links

In `index.html`, search for social links and update:

```html
<!-- Hero section social links -->
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">

<!-- Contact section social buttons -->
<a href="https://github.com/YOUR_USERNAME" target="_blank" class="social-btn">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank" class="social-btn">
```

## ✅ Step 4: Customize Content (Optional)

### Update Email/Phone
In `index.html`, search for:
- `smsiddu2286@gmail.com` → Your email
- `+91 6364007260` → Your phone number

### Modify About Section
Edit the "About Me" content in `index.html` under `<section id="about">` to add your personal touch.

### Add/Remove Skills
In the Skills section, add or remove skill tags as needed.

## 🚀 Step 5: Launch Your Portfolio

### Option 1: Open Directly
Simply double-click `index.html` to open in your browser.

### Option 2: Use a Local Server (Recommended)
Better for testing features like contact form:

**Using VS Code Live Server:**
1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"

**Using Python:**
```bash
cd "c:\Users\Naveen\OneDrive - A.M.C. ENGINEERING COLLEGE\Projects\naveenPortfolio"
python -m http.server 8000
```
Then open: http://localhost:8000

**Using Node.js:**
```bash
npx http-server
```

## 🌐 Step 6: Deploy Online

### GitHub Pages (Free)
1. Create a new GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site: `https://YOUR_USERNAME.github.io/REPO_NAME`

### Netlify (Free, Instant)
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your folder
3. Done! Get a free subdomain or connect custom domain

### Vercel (Free)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import repository
4. Deploy

## 🎨 Customization Tips

### Change Accent Color
In `styles.css`, find:
```css
:root {
    --accent-primary: #00d9ff;      /* Change this */
    --accent-secondary: #00b4d8;    /* And this */
}
```

Try these colors:
- Purple: `#a855f7` / `#9333ea`
- Green: `#10b981` / `#059669`
- Orange: `#f97316` / `#ea580c`
- Pink: `#ec4899` / `#db2777`

### Add More Projects
Copy a project card block in `index.html` and modify the content.

### Modify Animations
In `styles.css`, adjust animation durations and effects as you like.

## 📱 Testing

Test your portfolio on:
- ✅ Desktop browsers (Chrome, Firefox, Edge)
- ✅ Mobile devices (responsive design)
- ✅ Tablet view
- ✅ Check all links work
- ✅ Test contact form
- ✅ Verify images load correctly

## 🔧 Troubleshooting

### Images Not Showing?
- Check file paths are correct
- Ensure images are in `assets` folder
- File names are case-sensitive

### Contact Form Not Working?
- Currently uses `mailto:` (opens email client)
- For better functionality, consider EmailJS or FormSpree

### Styling Issues?
- Clear browser cache (Ctrl+F5)
- Check `styles.css` is linked correctly

## 📞 Need Help?

If you encounter any issues:
1. Check README.md for detailed documentation
2. Ensure all files are in correct locations
3. Verify image paths and links are updated

## 🎉 You're All Set!

Your professional portfolio is ready to showcase your skills and projects. Good luck with your job search!

---

**Pro Tip**: Keep your portfolio updated with new projects and skills as you grow!
