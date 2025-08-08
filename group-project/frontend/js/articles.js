document.addEventListener("DOMContentLoaded", () => {
    const textBlock = document.querySelector('.main-content .text');
    
    // 1 Анимация для будущих карточек статей
    textBlock.addEventListener('click', () => {
        textBlock.style.transform = 'scale(0.98)';
        setTimeout(() => { textBlock.style.transform = 'scale(1)'; }, 200);
    });
});