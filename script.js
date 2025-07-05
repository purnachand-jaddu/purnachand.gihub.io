// Tab navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all tab buttons and content sections
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Function to switch tabs
    function switchTab(targetTab) {
        // Remove active class from all buttons and content
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button
        const activeButton = document.querySelector(`[data-tab="${targetTab}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
        
        // Add active class to corresponding content
        const activeContent = document.getElementById(targetTab);
        if (activeContent) {
            activeContent.classList.add('active');
        }
    }
    
    // Add click event listeners to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            switchTab(targetTab);
            
            // Add a subtle animation effect
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab' && e.shiftKey) {
            // Handle shift+tab for accessibility
            return;
        }
        
        // Allow arrow key navigation between tabs
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
            const activeButton = document.querySelector('.tab-btn.active');
            if (activeButton) {
                const currentIndex = Array.from(tabButtons).indexOf(activeButton);
                let nextIndex;
                
                if (e.key === 'ArrowLeft') {
                    nextIndex = currentIndex > 0 ? currentIndex - 1 : tabButtons.length - 1;
                } else {
                    nextIndex = currentIndex < tabButtons.length - 1 ? currentIndex + 1 : 0;
                }
                
                const nextTab = tabButtons[nextIndex].getAttribute('data-tab');
                switchTab(nextTab);
                tabButtons[nextIndex].focus();
            }
        }
    });
    
    // Add smooth scrolling for better UX
    function smoothScrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Scroll to top when switching tabs
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            setTimeout(smoothScrollToTop, 100);
        });
    });
    
    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.experience-item, .education-item, .achievement-item, .skill-tag');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
        });
    });
    
    // Add click animation to skill tags
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.addEventListener('click', function() {
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    this.style.transform = '';
                }, 150);
            }, 100);
        });
    });
    
    // Add progress animation for language ratings
    function animateRatings() {
        const ratings = document.querySelectorAll('.rating');
        ratings.forEach(rating => {
            const stars = rating.querySelectorAll('i');
            stars.forEach((star, index) => {
                setTimeout(() => {
                    star.style.transform = 'scale(1.2)';
                    setTimeout(() => {
                        star.style.transform = '';
                    }, 200);
                }, index * 100);
            });
        });
    }
    
    // Trigger rating animation when skills tab is activated
    const skillsTabButton = document.querySelector('[data-tab="skills"]');
    if (skillsTabButton) {
        skillsTabButton.addEventListener('click', function() {
            setTimeout(animateRatings, 300);
        });
    }
    
    // Add fade-in animation for achievement items
    function animateAchievements() {
        const achievements = document.querySelectorAll('.achievement-item');
        achievements.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(20px)';
            
            setTimeout(() => {
                item.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
    
    // Trigger achievement animation when achievements tab is activated
    const achievementsTabButton = document.querySelector('[data-tab="achievements"]');
    if (achievementsTabButton) {
        achievementsTabButton.addEventListener('click', function() {
            setTimeout(animateAchievements, 200);
        });
    }
    
    // Add typing animation for summary text
    function typeWriter(element, text, speed = 50) {
        element.innerHTML = '';
        let i = 0;
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }
    
    // Add contact info animation
    const contactItems = document.querySelectorAll('.contact-item');
    contactItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateX(-20px)';
        
        setTimeout(() => {
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
        }, index * 200);
    });
    
    // Add profile avatar rotation on hover
    const profileAvatar = document.querySelector('.profile-avatar');
    if (profileAvatar) {
        profileAvatar.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) rotate(5deg)';
        });
        
        profileAvatar.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    }
    
    // Initialize with smooth entrance animation
    setTimeout(() => {
        const header = document.querySelector('.header');
        const mainContent = document.querySelector('.main-content');
        
        if (header) {
            header.style.opacity = '0';
            header.style.transform = 'translateY(-30px)';
            header.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                header.style.opacity = '1';
                header.style.transform = 'translateY(0)';
            }, 100);
        }
        
        if (mainContent) {
            mainContent.style.opacity = '0';
            mainContent.style.transform = 'translateY(30px)';
            mainContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            
            setTimeout(() => {
                mainContent.style.opacity = '1';
                mainContent.style.transform = 'translateY(0)';
            }, 300);
        }
    }, 100);
    
    // Add email click handler
    const emailLink = document.querySelector('a[href^="mailto:"]');
    if (emailLink) {
        emailLink.addEventListener('click', function(e) {
            // Add a visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    }
    
    console.log('Resume website loaded successfully!');
});
