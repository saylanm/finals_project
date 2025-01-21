document.addEventListener('DOMContentLoaded', () => {
    let swiperInstance = null; // Изначально Swiper не инициализирован

    const initSwiper = () => {
        if (window.innerWidth <= 768) {
            if (!swiperInstance) { // Создаем Swiper, если его еще нет
                swiperInstance = new Swiper('.swiper', {
                    slidesPerView: 1.2,
                    spaceBetween: 10,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                });
            }
        } else {
            if (swiperInstance && typeof swiperInstance.destroy === 'function') { // Убедиться, что destroy существует
                swiperInstance.destroy(true, true);
                swiperInstance = null;
            }
        }
    };

    // Инициализация при загрузке страницы
    initSwiper();

    // Отслеживаем изменение размера окна
    window.addEventListener('resize', initSwiper);
});


