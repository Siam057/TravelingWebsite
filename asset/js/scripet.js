
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

const sr = ScrollReveal({ /*  For Top Side */
    origin: 'top',
    distance: '85px',
    duration: 2500,
    reset:true
})

sr.reveal ('.home-text' ,{delay:300});


const sc = ScrollReveal({ /*  For left Side */
    origin: 'left',
    distance: '85px',
    duration: 2500,
    reset:true
})
sc .reveal ('.about-image' ,{delay:300});

const bo = ScrollReveal({ /*  For bottom Side */
    origin: 'bottom',
    distance: '85px',
    duration: 2500,
    reset:true
})

bo.reveal ('#row2' ,{delay:300});


const ri = ScrollReveal({ /*  For right Side */
    origin: 'right',
    distance: '85px',
    duration: 2500,
    reset:true
})

ri.reveal ('#row3' ,{delay:300});




