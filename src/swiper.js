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

var button = document.querySelector('.open'); // Ссылка-кнопка "Показать все"
var button_closed = document.querySelector('.closesd'); // Кнопка "Скрыть"
var close = document.querySelector('.close'); // Изображение-кнопка "Закрыть"
var content = document.querySelector('.modal'); // Модальное окно
var image = document.querySelector('.img'); // Изображение внутри `.img`


button.addEventListener('click', function(evt) {
    evt.preventDefault();
    content.classList.add('modal-show');
    button.classList.add('modal');
    close.classList.add('modal');
    button_closed.classList.remove('modal');
    close.classList.remove('modal');
    image.classList.add('modal');

})

button_closed.addEventListener('click', function() {
    content.classList.remove('modal-show');
    button.classList.remove('modal');
    close.classList.remove('modal');
    button_closed.classList.add('modal');
    image.classList.remove('modal');
    close.classList.add('modal');
})
// Находим элементы
var opens_button = document.querySelector('.show-all-2'); 
var hide_button = document.querySelector('.hide-all-2'); 
var vidimo = document.querySelector('.modal2');

var action_buttons = document.querySelector('.action-buttons'); 
var action_buttons2 = document.querySelector('.action-buttons2');

// Проверяем состояние при загрузке страницы
window.addEventListener('DOMContentLoaded', function () {
    action_buttons2.classList.add('modal2'); // Скрываем "Скрыть" при загрузке
    action_buttons.classList.remove('modal2'); // Показываем "Показать все"
});

// Логика "Показать все"
opens_button.addEventListener('click', function (evt) {
    evt.preventDefault();
    console.log('Показать все: work');

    // Показать скрытые элементы
    vidimo.classList.add('modal3'); // Показываем содержимое
    action_buttons2.classList.remove('modal2'); // Показываем "Скрыть"
    action_buttons.classList.add('modal2'); // Скрываем "Показать все"
});

// Логика "Скрыть"
hide_button.addEventListener('click', function () {
    console.log('Скрыть: work');

    // Скрыть элементы
    vidimo.classList.remove('modal3'); // Скрываем содержимое
    action_buttons2.classList.add('modal2'); // Скрываем "Скрыть"
    action_buttons.classList.remove('modal2'); // Показываем "Показать все"
});

