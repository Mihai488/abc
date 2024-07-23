function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);

  function reveal2() {
    var reveals = document.querySelectorAll(".reveal2");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal2);

 
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}


function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
  


let mybutton = document.getElementById("myBtn");


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}


function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}


const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let activeSlideIndex = 0;

function showSlide(index) {
  slides.forEach(slide => slide.style.opacity = 0);

  slides[index].style.opacity = 1;
  slides[index].style.zIndex = 1;
}

showSlide(activeSlideIndex);

prevBtn.addEventListener('click', () => {
  activeSlideIndex = (activeSlideIndex - 1 + slides.length) % slides.length;
  showSlide(activeSlideIndex);
});

nextBtn.addEventListener('click', () => {
  activeSlideIndex = (activeSlideIndex + 1) % slides.length;
  showSlide(activeSlideIndex);
});





