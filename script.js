// Theme Toggle Functionality
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', currentTheme);
updateThemeToggle(currentTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeToggle(newTheme);
});

function updateThemeToggle(theme) {
    themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
}

// Real-time Clock
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
        hour12: true,
        hour: 'numeric',
        minute: '2-digit'
    });
    document.getElementById('current-time').textContent = timeString;
}

// Update time immediately and then every minute
updateTime();
setInterval(updateTime, 60000);

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add click handlers for external links (projects, recognition, etc.)
document.addEventListener('DOMContentLoaded', function() {
    // Add click handlers for recognition items
    const recognitionItems = document.querySelectorAll('.recognition-content h3');
    recognitionItems.forEach(item => {
        item.addEventListener('click', function() {
            // You can replace these with actual URLs
            const links = {
                'Best Developer Award ↗': 'https://example.com/award',
                'Open Source Contributor ↗': 'https://github.com/yourusername',
                'Tech Innovation Prize ↗': 'https://example.com/innovation'
            };
            
            const url = links[this.textContent];
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // Add click handlers for project items
    const projectItems = document.querySelectorAll('.project-content h3');
    projectItems.forEach(item => {
        item.addEventListener('click', function() {
            const links = {
                'TaskFlow ↗': 'https://github.com/yourusername/taskflow',
                'WeatherPro ↗': 'https://github.com/yourusername/weatherpro',
                'CodeSnippets ↗': 'https://github.com/yourusername/codesnippets'
            };
            
            const url = links[this.textContent];
            if (url) {
                window.open(url, '_blank');
            }
        });
    });

    // Add click handlers for experience items
    const experienceItems = document.querySelectorAll('.company');
    experienceItems.forEach(item => {
        item.addEventListener('click', function() {
            const links = {
                'Tech Company ↗': 'https://techcompany.com',
                'Startup Inc ↗': 'https://startup.com',
                'Digital Agency ↗': 'https://digitalagency.com'
            };
            
            const url = links[this.textContent];
            if (url) {
                window.open(url, '_blank');
            }
        });
    });
});

// Add subtle animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all cards for animation
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Add typing effect to the title (optional enhancement)
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Uncomment to enable typing effect on page load
// document.addEventListener('DOMContentLoaded', function() {
//     const titleElement = document.querySelector('.profile-card h1');
//     const originalText = titleElement.textContent;
//     typeWriter(titleElement, originalText, 150);
// });