let mobileMenu = document.querySelector('.mobile-menu')
let navList = document.querySelector('.nav-list')
let navLinks = document.querySelectorAll('.nav-link')

console.log(navLinks)


function animateLinks(){
    links.forEach((link) =>{
        link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `mobileMenuLinksFade 0.5s ease fowards 0.3s`)
    })
}

function toggleNav(){
    navList.classList.toggle("active")
    navLinks.forEach((links) => {
        links.classList.toggle("active")
    })
    
   
}

mobileMenu.addEventListener('click', toggleNav)