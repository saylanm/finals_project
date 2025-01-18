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

var button = document.querySelector('.open');
var button_closed = document.querySelector('.closesd');
var close = document.querySelector('.close');
var content = document.querySelector('.modal');
var img = document.querySelector('.close');
var image = document.querySelector('.img');

button.addEventListener('click', function(evt) {
    evt.preventDefault();
    content.classList.add('modal-show');
    button.classList.add('modal');
    img.classList.add('modal');
    button_closed.classList.remove('modal');
    img.classList.remove('modal');
    image.classList.add('modal');

})

button_closed.addEventListener('click', function() {
    content.classList.remove('modal-show');
    button.classList.remove('modal');
    img.classList.remove('modal');
    button_closed.classList.add('modal');
    image.classList.remove('modal');
    close.classList.add('modal');
})
