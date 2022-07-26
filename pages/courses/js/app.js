const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector(".navLinks");
    const navLinks = document.querySelectorAll(".navlinks");
// Toggling the navbar
    burger.addEventListener('click', ()=>{
        nav.classList.toggle("nav-active");
        //Animation
navLinks.forEach((link, index)=>{
    if (link.style.animation){
        link.style.animation = '';
    } else{
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 +0.5}s`;
    }
    })
    //Burger animation
    burger.classList.toggle('toggle');

});
}
navSlide();