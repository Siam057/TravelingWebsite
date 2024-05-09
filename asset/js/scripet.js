
// NaveGetion Bar 

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}







// Scroll Animeton Code 

const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset:true
})

sr.reveal ('.home_text' ,{delay:300});