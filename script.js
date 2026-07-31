// =======================================
// Active Navbar on Scroll
// =======================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});



// =======================================
// Sticky Navbar
// =======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(9,9,11,.95)";
        header.style.boxShadow = "0 10px 35px rgba(0,0,0,.4)";

    }

    else {

        header.style.background = "rgba(9,9,11,.70)";
        header.style.boxShadow = "none";

    }

});



// =======================================
// Scroll Reveal Animation
// =======================================

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},
{
    threshold:.15
});


const hiddenElements = document.querySelectorAll(

".about-card,.education-card,.skill-card,.project-card,.contact-card"

);

hiddenElements.forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});



// =======================================
// Typing Animation
// =======================================

const text = "Aspiring Data Analyst";

const typing = document.querySelector(".hero h2");

typing.innerHTML = "";

let i = 0;

function typeWriter(){

    if(i < text.length){

        typing.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter,80);

    }

}

typeWriter();



// =======================================
// Button Ripple Effect
// =======================================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn=>{

btn.addEventListener("mousemove",e=>{

const x = e.pageX - btn.offsetLeft;

const y = e.pageY - btn.offsetTop;

btn.style.setProperty("--x",x+"px");

btn.style.setProperty("--y",y+"px");

});

});



// =======================================
// Smooth Scroll
// =======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))

.scrollIntoView({

behavior:"smooth"

});

});

});
