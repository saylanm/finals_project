
//находим эелементы для 1 свайпера
var button = document.querySelector('.open'); // Ссылка-кнопка "Показать все"
var button_closed = document.querySelector('.closesd'); // Кнопка "Скрыть"
var close = document.querySelector('.close'); // Изображение-кнопка "Закрыть"
var content = document.querySelector('.modal'); // Модальное окно
var image = document.querySelector('.img'); // Изображение внутри `.img`

// логика нажатия кнопки "показать все" 1 свайпера
button.addEventListener('click', function(evt) {
    evt.preventDefault();
    content.classList.add('modal-show');
    button.classList.add('modal');
    close.classList.add('modal');
    button_closed.classList.remove('modal');
    close.classList.remove('modal');
    image.classList.add('modal');

})
// логика нажатия кнопки "скрыть" 1 свайпера
button_closed.addEventListener('click', function() {
    content.classList.remove('modal-show');
    button.classList.remove('modal');
    close.classList.remove('modal');
    button_closed.classList.add('modal');
    image.classList.remove('modal');
    close.classList.add('modal');
})


//находим эелементы для 2 свайпера
var opens_button = document.querySelector('.show-all-2'); 
var hide_button = document.querySelector('.hide-all-2'); 
var vidimo = document.querySelector('.modal2');

var action_buttons = document.querySelector('.action-buttons'); 
var action_buttons2 = document.querySelector('.action-buttons2');

// Логика "Показать все" 2 свайпера
opens_button.addEventListener('click', function (evt) {
    evt.preventDefault();
    action_buttons.classList.add('modal2'); // Скрываем "Показать все"
    vidimo.classList.add('modal3'); // Показываем содержимое
    action_buttons2.classList.remove('modal2'); // Показываем "Скрыть"
   
});

// Логика "Скрыть" 2 свайпера
hide_button.addEventListener('click', function () {
    vidimo.classList.remove('modal3'); // Скрываем содержимое
    action_buttons2.classList.add('modal2'); // Скрываем "Скрыть"
    action_buttons.classList.remove('modal2'); // Показываем "Показать все"
});

// реализация кнопки бургера
let burger = document.querySelector('.header-navigation__button--burger'); //кнопка отакрытия меню
let closeBurger = document.querySelector('.button-close'); //кнопка закрытия меню
let menu = document.querySelector('.main-burgeg');


burger.addEventListener('click', function() {
    console.log('бургер')
    menu.classList.remove('no-active')
})

closeBurger.addEventListener('click', function() {
    console.log('закрытие-бургер')
    menu.classList.add('no-active')
})
