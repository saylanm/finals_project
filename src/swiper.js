document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance;

    const initSwiper = () => {
        if (window.innerWidth <= 768 && !swiperInstance) { // Проверяем, мобильная ли версия
            swiperInstance = new Swiper('.swiper', {
                slidesPerView: 1.2,
                spaceBetween: 10,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            });
        } else if (window.innerWidth > 768 && swiperInstance) { // Отключаем Swiper на большом экране
            swiperInstance.destroy(true, true);
            swiperInstance = null;
        }
    };



    // Инициализация при загрузке страницы
    initSwiper();

    // Отслеживаем изменение размера окна
    window.addEventListener('resize', initSwiper);
});