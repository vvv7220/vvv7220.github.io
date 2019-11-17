let menu = document.querySelector('#menu');
let menu_btn = document.querySelector('.burger_menu');
let hamburger = document.querySelector('.hamburger');
menu_btn.addEventListener('click', function () {
    menu.classList.toggle('open_menu');
    if (menu.classList.contains('open_menu')) {
        hamburger.classList.add('is-active');
        menu_btn.classList.add('moveLeft');
    }
    else {
        hamburger.classList.remove('is-active');
        menu_btn.classList.remove('moveLeft');

    }
});
