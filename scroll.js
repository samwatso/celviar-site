// Celviar - Navigation scroll behavior
(function() {
    'use strict';
    
    const header = document.getElementById('header');
    let lastScroll = 0;
    let ticking = false;
    
    function updateHeader(scrollPos) {
        if (scrollPos > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
    
    function onScroll() {
        lastScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        if (!ticking) {
            window.requestAnimationFrame(function() {
                updateHeader(lastScroll);
                ticking = false;
            });
            
            ticking = true;
        }
    }
    
    // Initialize
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Check initial state
    updateHeader(window.pageYOffset || document.documentElement.scrollTop);
})();