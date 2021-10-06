'use strict';

{
    const hamburgerMenu = document.querySelector('.hamburger_menu');
    const hamburgerIcon = hamburgerMenu.firstElementChild;
    const modal = document.querySelector('.modal');

    // ハンバーガーメニュークリック時の処理
    hamburgerMenu.addEventListener('click', () => {
        hamburgerIcon.classList.toggle('active');
        modal.classList.toggle('active');
    });    
}