
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

sr.reveal ('#name' ,{delay:300});
sr.reveal ('#h1' ,{delay:300});
sr.reveal ('#h2' ,{delay:300});
sr.reveal ('.praTag' ,{delay:300});
sr.reveal ('.serachBar' ,{delay:300});




const ss = ScrollReveal({
   origin: 'bottom',
   distance: '85px',
   duration: 2500,
   reset:true
})

ss.reveal ('#name' ,{delay:300});
ss.reveal ('.bottom' ,{delay:300});




const sl = ScrollReveal({
   origin: 'left',
   distance: '85px',
   duration: 2500,
   reset:true
})

sl.reveal ('.left' ,{delay:300});



const sp = ScrollReveal({
   origin: 'right',
   distance: '85px',
   duration: 2500,
   reset:true
})

sp.reveal ('.right' ,{delay:300});
