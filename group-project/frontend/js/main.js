document.addEventListener("DOMContentLoaded", () => {
    const textBlock = document.querySelector('.main-content .text');
    
    // 1. Эффект "типа загрузки"
    textBlock.innerHTML = '<div class="loading-dots"></div>';
    
    // 2. После "загрузки" показываем контент
    setTimeout(() => {
        textBlock.innerHTML = 'тут будут новости по контейнерам';
        textBlock.style.animation = 'fadeIn 1s ease';
        
        // 3. Эффект "мерцания" для привлечения внимания
        setInterval(() => {
            textBlock.style.textShadow = '0 0 8px rgba(0, 87, 183, 0.7)';
            setTimeout(() => {
                textBlock.style.textShadow = 'none';
            }, 500);
        }, 3000);
    }, 1500);
});