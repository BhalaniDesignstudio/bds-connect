document.addEventListener('DOMContentLoaded', () => {
    // Add simple entrance animations for the links
    const linkCards = document.querySelectorAll('.link-card');
    
    linkCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 300 + (index * 100)); // Staggered delay
    });
});
