document.addEventListener("DOMContentLoaded", () => {
    // 1. Плавное появление страницы
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transition = 'opacity 0.6s ease';
    setTimeout(() => { container.style.opacity = '1'; }, 100);

    // 2. Анимация навигации
    const navItems = document.querySelectorAll('.nav-item, .login');
    navItems.forEach((item, i) => {
        item.style.transform = 'translateY(-10px)';
        item.style.opacity = '0';
        item.style.transition = `all 0.4s ease ${i * 0.1}s`;
        setTimeout(() => {
            item.style.transform = 'translateY(0)';
            item.style.opacity = '1';
        }, 200);
    });

    // 3. Эффект при наведении на кнопки
    const buttons = document.querySelectorAll('.btn, .nav-item');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            btn.style.transform = 'scale(1.05)';
            btn.style.transition = 'transform 0.2s ease';
        });
        btn.addEventListener('mouseleave', () => {
            btn.style.transform = 'scale(1)';
        });
    });

    // 4. Подсветка активной страницы
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll(`.nav-item[href="${currentPage}"]`).forEach(item => {
        item.style.boxShadow = '0 2px 0 var(--blue-main)';
    });
});