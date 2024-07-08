let menu=document.querySelector('#display-nav-menu');
let menuHidden=document.querySelector('.hidden-menu');
let displayX=document.querySelector('.displayX');

function nav(){
    // console.log('clic')
    menuHidden.classList.toggle('display-box');
}

displayX.addEventListener('click',nav)

menu.addEventListener('click',nav);

