// Smooth scroll animation observer
function initializeScrollAnimations() {
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

    // Observe all animated elements
    document.querySelectorAll('.animate-fade-in, .animate-slide-in-left, .animate-slide-in-right').forEach(el => {
        observer.observe(el);
    });
}

// Add hover effects to buttons
function initializeButtonEffects() {
    document.querySelectorAll('.royal-button').forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-3px)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
        });
    });
}

// Parallax effect for floating elements and custom scrollbar
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        document.querySelectorAll('.animate-float').forEach((element, index) => {
            const speed = 0.5 + (index * 0.2);
            element.style.transform = `translateY(${rate * speed}px)`;
        });

        // Custom lightning bolt scrollbar effect - only move the indicator
        const scrollIndicator = document.querySelector('.scroll-indicator');
        if (scrollIndicator) {
            const docHeight = document.documentElement.scrollHeight;
            const winHeight = window.innerHeight;
            if (docHeight > winHeight) {
                const scrollPercent = scrolled / (docHeight - winHeight);
                const containerHeight = document.getElementById('custom-scrollbar-container').clientHeight;
                const indicatorPosition = scrollPercent * containerHeight;
                
                scrollIndicator.style.top = `${indicatorPosition}px`;
                
                // Add scrolling class for lightning animation effect
                if (scrolled > 0) {
                    document.body.classList.add('scrolling');
                    // Remove class after a delay for cool animation effect
                    clearTimeout(window.scrollTimeout);
                    window.scrollTimeout = setTimeout(() => {
                        document.body.classList.remove('scrolling');
                    }, 300);
                }
            }
        }

        // Update navigation and header on scroll
        updateActiveNavItem();
        updateHeaderOnScroll();
    });
}
