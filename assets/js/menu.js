

let mobile_btn = document.querySelector('.navbar__mobile-btn');
let mobile__menu = document.querySelector('.navbar__mobile-list');


mobile_btn.addEventListener('click', () =>{

    mobile__menu.classList.toggle('menu__open');
})





//submenu

let submenu_btn = document.querySelector('.item1');
let submenu_btn2 = document.querySelector('.item2');
let submenu = document.querySelector('#submenu1');
let submenu2 = document.querySelector('#submenu2');


submenu_btn.addEventListener('click', ()=> {

    submenu.classList.toggle('menu__open');

})

submenu_btn2.addEventListener('click', ()=> {

    submenu2.classList.toggle('menu__open');

})



// redimensionado

window.addEventListener('resize', ()=>{

    let win = parseFloat(document.body.clientWidth);

    if(win > 1024){
        mobile__menu.classList.remove('menu__open');
    }
})