window.onload = function(){
   const menu_btn = document.querySelector('.hamburger');
   const mobile_menu = document.querySelector('.menu_container');
   const mobile_logo = document.querySelector('.logo_container');
   const nav_mobile = document.querySelector('.navbar-mobile');
   
   menu_btn.addEventListener('click', function(){
       menu_btn.classList.toggle('is-active');
       mobile_menu.classList.toggle('is-active');
       mobile_logo.classList.toggle('is-active');
       nav_mobile.classList.toggle('is-active');
   });
}
