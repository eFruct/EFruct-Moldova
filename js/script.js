function mobileMenu() {
    var x = document.getElementsByTagName("navbar")[0];
    if (x.className === "") {
        x.className += "mobile";
    } else {
        x.className = "";
    }
}

function mobileMenuRefresh() {
    var x = document.getElementsByTagName("navbar")[0]; // Am modificat selectorul pentru a selecta elementul "nav"
    if (x.className === "mobile") { // Am modificat clasa din "" în "mobile"
      x.className = ""; // Am eliminat adăugarea clasei "mobile"
    }
  }

// inceput script schimbator tema

function toggleTheme() {
    var theme = document.getElementById("theme");
    if (theme.getAttribute("href") == "css/light.css") {
     theme.href = "css/dark.css";
    } else {
     theme.href = "css/light.css";
    }
   }

  // sfarsit script schimbator tema

//   scroll smooth <
document.documentElement.style.scrollBehavior = 'smooth';
//   scroll smooth >

//  script ascunde navbar <

var prevScrollPos = window.pageYOffset;

 window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;

      if (prevScrollPos > currentScrollPos) {
        document.getElementById("header").style.top = "0.5rem"; // Afișare navbar
      } else {
        document.getElementById("header").style.top = "-100px"; // Ascundere navbar
      }

      prevScrollPos = currentScrollPos; // Actualizare poziție anterioară
    }

//   script ascunde navbar >

// inceput script faq
const buttons = document.querySelectorAll('.intrebare-faq button');

buttons.forEach( button =>{
    button.addEventListener('click',()=>{
        const faq = button.nextElementSibling;
        const icon = button.children[1];

        faq.classList.toggle('show');
        icon.classList.toggle('rotate');
    })
} )
// sfarsit script faq

// animatii <
AOS.init();
// animatii />