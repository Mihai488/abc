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


function pickUp(){
  const van1=document.getElementById("van1");
    const van2=document.getElementById("van2");
const van3=document.getElementById("van3");
const van4=document.getElementById("van4");
const toate=document.getElementById("toate");
const pickup=document.getElementById("pickup");
const minivan=document.getElementById("miniVan");
const vanCat=document.getElementById("vanCat");
pickup.style.textDecoration = 'underline';
pickup.style.textDecorationColor = '#0000ff';
pickup.style.textDecorationThickness = '2px';
toate.style.textDecoration="none";
minivan.style.textDecoration="none";
vanCat.style.textDecoration="none";
van1.style.visibility="visible";
  van2.style.visibility="hidden";
  van3.style.visibility="hidden";
  van4.style.visibility="hidden";
}


function miniVan(){
  const van1=document.getElementById("van1");
  const van2=document.getElementById("van2");
  const van3=document.getElementById("van3");
  const van4=document.getElementById("van4");
  const toate=document.getElementById("toate");
const pickup=document.getElementById("pickup");
const minivan=document.getElementById("miniVan");
const vanCat=document.getElementById("vanCat");
minivan.style.textDecoration = 'underline';
minivan.style.textDecorationColor = '#0000ff';
minivan.style.textDecorationThickness = '2px';
toate.style.textDecoration="none";
pickup.style.textDecoration="none";
vanCat.style.textDecoration="none";
    van1.style.visibility="hidden";
   van2.style.visibility="hidden";
   van3.style.visibility="visible";
   van4.style.visibility="visible";
}

function van(){
  const van1=document.getElementById("van1");
  const van2=document.getElementById("van2");
  const van3=document.getElementById("van3");
  const van4=document.getElementById("van4");
  const toate=document.getElementById("toate");
  const pickup=document.getElementById("pickup");
  const minivan=document.getElementById("miniVan");
  const vanCat=document.getElementById("vanCat");
  vanCat.style.textDecoration = 'underline';
  vanCat.style.textDecorationColor = '#0000ff';
  vanCat.style.textDecorationThickness = '2px';
  pickup.style.textDecoration="none";
  toate.style.textDecoration="none";
  minivan.style.textDecoration="none";
    van1.style.visibility="hidden";
   van2.style.visibility="visible";
   van3.style.visibility="hidden";
   van4.style.visibility="visible";
}



document.addEventListener("DOMContentLoaded", () => {
  const rotateDiv = document.getElementById("rotate");
  if (rotateDiv) {
      rotateDiv.addEventListener("mouseover", () => {
          rotateDiv.textContent = "Contacteaza-ne!";
      });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const rotateDiv = document.getElementById("rotate");
  if (rotateDiv) {
      rotateDiv.addEventListener("mouseout", () => {
          rotateDiv.textContent = "Sunteti interesat de ceva?";
      });
  }
});





