// ==================== NAVIGATION ==================== 
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
        navbar.style.boxShadow = '0 5px 20px rgba(0, 217, 255, 0.1)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// ==================== SMOOTH SCROLLING ==================== 
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== CONTACT FORM ==================== 
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Create mailto link
    const mailtoLink = `mailto:smsiddu2286@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show success message
    showNotification('Message prepared! Your email client should open shortly.', 'success');
    
    // Reset form
    contactForm.reset();
});

// ==================== NOTIFICATION SYSTEM ==================== 
function showNotification(message, type = 'success') {
    // Remove existing notification if any
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
        <span>${message}</span>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? 'linear-gradient(135deg, #00d9ff 0%, #00b4d8 100%)' : '#ff006e'};
        color: #0a0a0a;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 30px rgba(0, 217, 255, 0.3);
        display: flex;
        align-items: center;
        gap: 12px;
        font-weight: 600;
        z-index: 10000;
        animation: slideIn 0.3s ease forwards;
    `;
    
    document.body.appendChild(notification);
    
    // Remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ==================== SCROLL ANIMATIONS ==================== 
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.8s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements
document.querySelectorAll('.project-card, .skill-category, .about-highlights, .contact-item').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
});

// ==================== PROJECT CARD INTERACTIONS ==================== 
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Don't trigger if clicking on links
        if (e.target.closest('.project-link') || e.target.closest('.project-github')) {
            return;
        }
        
        // Add a subtle scale effect
        card.style.transform = 'scale(0.98)';
        setTimeout(() => {
            card.style.transform = '';
        }, 200);
    });
});

// ==================== TYPING EFFECT ==================== 
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Optional: Add typing effect to hero subtitle on page load
window.addEventListener('load', () => {
    const subtitle = document.querySelector('.hero-subtitle');
    const originalText = subtitle.textContent;
    typeWriter(subtitle, originalText, 50);
});

// ==================== DYNAMIC YEAR IN FOOTER ==================== 
const currentYear = new Date().getFullYear();
document.querySelector('.footer-content p').innerHTML = `&copy; ${currentYear} S M Siddalingaswamy. All rights reserved.`;

// ==================== PARALLAX EFFECT ==================== 
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero::before');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== CONSOLE MESSAGE ==================== 
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #00d9ff;');
console.log('%cInterested in the code? Check out my GitHub!', 'font-size: 14px; color: #b0b0b0;');
console.log('%chttps://github.com', 'font-size: 12px; color: #00d9ff;');
