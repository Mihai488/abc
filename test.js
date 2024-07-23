const infoButton = document.querySelector('.info-button');
const popup = document.querySelector('.popup');
const closeButton = document.querySelector('.popup .close');
const overlay = document.querySelector('.overlay-rutiera');

infoButton.addEventListener('click', () => {
  popup.classList.add('active');
  overlay.classList.add('active');
});

closeButton.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  popup.classList.remove('active');
  overlay.classList.remove('active');
});

const infoButton2 = document.querySelector('.info-button-plus');
const popup2 = document.querySelector('.popup-plus');
const closeButton2 = document.querySelector('.popup-plus .close2');
const overlay2 = document.querySelector('.overlay-rutiera-plus');

infoButton2.addEventListener('click', () => {
  popup2.classList.add('active');
  overlay2.classList.add('active');
});

closeButton2.addEventListener('click', () => {
  popup2.classList.remove('active');
  overlay2.classList.remove('active');
});

overlay2.addEventListener('click', () => {
  popup2.classList.remove('active');
  overlay2.classList.remove('active');
});

const infoButton3 = document.querySelector('.info-button3');
const popup3 = document.querySelector('.popup3');
const closeButton3 = document.querySelector('.popup3 .close3');
const overlay3 = document.querySelector('.overlay-rutiera3');

infoButton3.addEventListener('click', () => {
  popup3.classList.add('active');
  overlay3.classList.add('active');
});

closeButton3.addEventListener('click', () => {
  popup3.classList.remove('active');
  overlay3.classList.remove('active');
});

overlay3.addEventListener('click', () => {
  popup3.classList.remove('active');
  overlay3.classList.remove('active');
});

const infoButton4 = document.querySelector('.info-button4');
const popup4 = document.querySelector('.popup-vacanta');
const closeButton4 = document.querySelector('.popup-vacanta .close-vacanta');
const overlay4 = document.querySelector('.overlay-vacanta');

infoButton4.addEventListener('click', () => {
  popup4.classList.add('active');
  overlay4.classList.add('active');
});

closeButton4.addEventListener('click', () => {
  popup4.classList.remove('active');
  overlay4.classList.remove('active');
});

overlay4.addEventListener('click', () => {
  popup4.classList.remove('active');
  overlay4.classList.remove('active');
});





const payPal=document.getElementById("payPal");
const masterCard=document.getElementById("masterCard");
const visa=document.getElementById("visa");
const myResult=document.getElementById("myResult");

document.getElementById("mySubmit").onclick=function(){
  if(masterCard.checked)
    {
      myResult.textContent="Ai selectat metoda de plata MasterCard!";
    }
    else if(visa.checked)
      {
        myResult.textContent="Ai selectat metoda de plata Visa!";
      }
      else if(payPal.checked)
        {
          myResult.textContent="Ai selectat metoda de plata PayPal!";
        }
}