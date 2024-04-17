const burger = document.querySelector('nav svg');

burger.addEventListener('click', () => {
    if(burger.classList.contains('active'))
    {
        gsap.to('.links', {x: "100%" });
    }
    else
    {
        gsap.to('.links', {x: "0%"  });
        
        gsap.fromTo('.links a', {opacity:0 , y:0}, {y:5, opacity:1, delay:0.25, stagger:0.1} );
        
        // gsap.set('body', {overflow:hidden});

    }

    burger.classList.toggle('active');

});


let popup=document.getElementById('popup');
let blur=document.getElementById('blur');

function openpopup(){
    popup.classList.add('open-popup');
    blur.style.visibility="visible";
}

function closepopup(){
    popup.classList.remove('open-popup');
    
    blur.style.visibility="hidden";
    
}


