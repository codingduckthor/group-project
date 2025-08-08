document.addEventListener("DOMContentLoaded", () => {
    const textBlock = document.querySelector('.main-content .text');
    
    // 1. Эффект "появления из центра"
    textBlock.style.transform = 'scale(0)';
    textBlock.style.opacity = '0';
    textBlock.style.transition = 'all 0.6s ease';
    setTimeout(() => {
        textBlock.style.transform = 'scale(1)';
        textBlock.style.opacity = '1';
    }, 300);

    // 2. Анимация при наведении
    textBlock.addEventListener('mouseover', () => {
        textBlock.style.boxShadow = '0 0 15px rgba(0, 87, 183, 0.3)';
    });
    textBlock.addEventListener('mouseout', () => {
        textBlock.style.boxShadow = 'none';
    });
});