# S M Siddalingaswamy - Portfolio Website

A modern, professional portfolio website for a Full-Stack Developer (MERN + Gen AI) with a sleek dark mode theme and professional design.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Dark Theme**: Professional dark mode with teal/blue accents
- **Smooth Animations**: Fade-in effects, hover animations, and smooth scrolling
- **Interactive Projects Gallery**: Clickable project cards showcasing MERN and Gen AI applications
- **Contact Form**: Functional contact form that opens your default email client
- **Modern UI/UX**: Clean, professional interface with tech-inspired design elements

## 🎨 Color Scheme

- **Background**: Dark (#0a0a0a, #111111, #1a1a1a)
- **Text**: Professional white (#ffffff, #b0b0b0)
- **Accent**: Tech-inspired teal/blue (#00d9ff, #00b4d8)

## 📂 Project Structure

```
naveenPortfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive JavaScript features
├── assets/             # Images and media files
│   ├── profile.jpg     # Your profile photo
│   ├── project1.jpg    # E-Ration Shop project screenshot
│   ├── project2.jpg    # AetherCare project screenshot
│   ├── project3.jpg    # Python projects screenshot
│   └── project4.jpg    # Web development projects screenshot
└── README.md           # This file
```

## 🚀 Getting Started

### 1. Add Your Images

Replace the placeholder images in the `assets` folder:

- **profile.jpg**: Your professional photo (square format, min 400x400px)
- **project1.jpg**: E-Ration Shop screenshot
- **project2.jpg**: AetherCare project screenshot
- **project3.jpg**: Python applications screenshot
- **project4.jpg**: Web development projects screenshot

### 2. Update Project Links

In `index.html`, update the project links:

```html
<!-- Example: Update href attributes -->
<a href="YOUR_PROJECT_URL" class="project-link">
<a href="YOUR_GITHUB_REPO" class="project-github">
```

### 3. Update Social Media Links

In `index.html`, update your social media profiles:

```html
<!-- Update these URLs -->
<a href="https://github.com/YOUR_USERNAME" target="_blank">
<a href="https://linkedin.com/in/YOUR_PROFILE" target="_blank">
```

### 4. Open the Website

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (with http-server)
npx http-server

# Using VS Code Live Server extension
# Right-click on index.html → Open with Live Server
```

## 📱 Sections Overview

### 1. **Home/Hero Section**
- Eye-catching introduction with your name and title
- Professional photo with gradient overlay effect
- Call-to-action buttons
- Social media links

### 2. **About Me**
- Professional background and aspirations
- AI enthusiasm and tech passion
- Education and experience highlights
- Certifications showcase

### 3. **Skills**
- Organized by categories:
  - Programming Languages
  - Frontend Technologies
  - Backend Technologies
  - AI & Cloud Tools (highlighted)
  - DevOps & Tools
  - Soft Skills

### 4. **Projects**
- Dynamic project cards with hover effects
- MERN and Gen AI projects featured
- Technology tags for each project
- Links to live demos and GitHub repositories

### 5. **Contact**
- Contact information (email, phone, location)
- Functional contact form
- Social media buttons
- Email integration

## 🛠️ Customization

### Update Personal Information

1. **Contact Details** (in `index.html`):
   - Email: `smsiddu2286@gmail.com`
   - Phone: `+91 6364007260`
   - Location: Update as needed

2. **Resume Content**: All content is pulled from your resume, but you can modify:
   - Project descriptions
   - Skills list
   - Experience details

### Modify Colors

In `styles.css`, update the CSS variables:

```css
:root {
    --accent-primary: #00d9ff;      /* Change main accent color */
    --accent-secondary: #00b4d8;    /* Change secondary accent */
}
```

### Add More Projects

Copy a project card in `index.html` and modify the content:

```html
<div class="project-card">
    <!-- Update image, title, description, and tech tags -->
</div>
```

## 🌐 Deployment

### GitHub Pages
1. Create a GitHub repository
2. Push your code
3. Go to Settings → Pages
4. Select branch and save
5. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME`

### Netlify
1. Drag and drop the folder to [Netlify](https://netlify.com)
2. Your site will be live instantly

### Vercel
1. Import your GitHub repository to [Vercel](https://vercel.com)
2. Deploy with one click

## 📧 Contact Form Setup

The contact form currently uses `mailto:` to open your default email client. For a more robust solution, consider:

- **FormSpree**: Free form backend service
- **EmailJS**: Send emails directly from JavaScript
- **Netlify Forms**: If hosting on Netlify
- **Custom Backend**: Build your own with Node.js/Express

## 💡 Tips

1. **Optimize Images**: Compress images before uploading (use TinyPNG or similar)
2. **SEO**: Update meta tags in `index.html` for better search visibility
3. **Analytics**: Add Google Analytics or similar for tracking
4. **Performance**: Consider lazy loading images for better performance

## 🔧 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive features and animations
- **Font Awesome**: Icons
- **Google Fonts**: Typography (system fonts currently)

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For any questions or issues, reach out:
- Email: smsiddu2286@gmail.com
- Phone: +91 6364007260

---

**Made with ❤️ and ☕ by S M Siddalingaswamy**
