let menuBar =document.querySelector('#menu-bar'); 
let menuLeft = document.querySelector('.left');
let closeLeft = document.querySelector('#close')

menuBar.onclick=()=>{
       // menu.classList.toggle('fa-times');
       menuLeft.classList.toggle('active');
}
closeLeft.onclick=()=>{
       // menu.classList.toggle('fa-times');
       menuLeft.classList.remove('active');
}