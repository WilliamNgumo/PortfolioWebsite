let menu= document.querySelector('.header .fa-bars-staggered');
let navbar= document.querySelector('.header .navbar');

menu.onclick=()=>{
    navbar.classList.toggle('active');
}