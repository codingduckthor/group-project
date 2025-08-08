document.addEventListener("DOMContentLoaded", () => {
    const textBlock = document.querySelector('.main-content .text');
    
    // 1. Эффект "печатания текста"
    const originalText = textBlock.textContent;
    textBlock.textContent = '';
    
    let i = 0;
    const typingEffect = setInterval(() => {
        if (i < originalText.length) {
            textBlock.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typingEffect);
        }
    }, 50);

    // 2. Анимация границы
    textBlock.style.border = '2px solid transparent';
    setTimeout(() => {
        textBlock.style.border = '2px dashed var(--blue-main)';
        textBlock.style.transition = 'border 0.8s ease';
    }, 1000);
});