/**
 * Moonshine Capital - Static Site Logic
 * Handles Navigation, Sticky Headers, and Global UI events
 */

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initStickyHeader();
    initSmoothScroll();
});

/* --- Mobile Menu Toggle --- */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');
    
    if (btn && menu) {
        btn.addEventListener('click', () => {
            const isHidden = menu.classList.contains('hidden');
            if (isHidden) {
                menu.classList.remove('hidden');
                // Optional: Change icon to X
            } else {
                menu.classList.add('hidden');
            }
        });
    }
}

/* --- Sticky Navbar Effect --- */
function initStickyHeader() {
    const navbar = document.querySelector('nav');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 10) {
            navbar.classList.add('shadow-lg', 'bg-opacity-95');
            navbar.classList.remove('bg-opacity-0');
        } else {
            // Keep it somewhat opaque or transparent at top depending on hero design
            // For this theme, we keep it consistent but maybe less shadow
            navbar.classList.remove('shadow-lg');
        }
    });
}

/* --- Smooth Scroll for Anchors --- */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const menu = document.getElementById('mobile-menu');
                if (menu && !menu.classList.contains('hidden')) {
                    menu.classList.add('hidden');
                }
            }
        });
    });
}