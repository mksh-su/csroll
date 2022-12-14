// chat open
document.querySelector(".header-links-chat")?.addEventListener("click", function () {
  this.classList.toggle("chat-close");
  document.querySelector(".right-col").classList.toggle("chat-col-hidden");
});

// timer
// Set the date we're counting down to
const countDownDate = new Date("Dec 24, 2022 00:00:00").getTime();
const minutesEl = document.querySelector("#m");
const secondsEl = document.querySelector("#s");
if (secondsEl) {
  // Update the count down every 1 second
  var x = setInterval(function () {
    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    //   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    //   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element
    minutesEl.innerText = addZero(minutes);
    secondsEl.innerText = addZero(seconds);
  }, 1000);
}
// add zero to numbers less than 10
function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

// accordion
const accordionBtns = document.querySelectorAll(".accordion-btn");

accordionBtns.forEach((accordion) => {
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.parentElement;
    content.classList.toggle("is-open");
  };
});

// tablet
const mediaQuery1180 = window.matchMedia("(max-width: 1180px)");
if (mediaQuery1180.matches) {
  // desktop containers
  let logoDesk = document.getElementsByClassName("nav-logo")[0];
  let steamBtnDesk = document.getElementsByClassName("header-btn-steam")[0];
  let chatBtnDesk = document.getElementsByClassName("header-links-chat")[0];
  let topHeaderTabsContent = document.getElementsByClassName("header-links")[0];

  // new containers
  let logoMob = document.getElementsByClassName("header-mob-logo")[0];
  let steamBtnMob = document.getElementsByClassName("header-mob-btn-steam")[0];
  let chatBtnMob = document.getElementsByClassName("header-mob-btn-chat")[0];
  let topHeaderTabsMobileContent = document.getElementsByClassName("header-mob-inner")[0];

  // moving the desktop elements to new containers
  logoMob.appendChild(logoDesk);
  steamBtnMob.appendChild(steamBtnDesk);
  chatBtnMob.appendChild(chatBtnDesk);
  topHeaderTabsMobileContent.appendChild(topHeaderTabsContent);

  document.querySelector(".header-mob-burger")?.addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".header-mob-inner").classList.toggle("active");
    document.body.classList.toggle("no-scroll");
  });  

  document.querySelector(".nav-mob-burger")?.addEventListener("click", function () {
    this.classList.toggle("active");
  });  
}

// mobile
const mediaQuery768 = window.matchMedia("(max-width: 768px)");
if (mediaQuery768.matches) {
  document.querySelector(".header-links-chat").classList.add("chat-close");
  document.querySelector(".right-col").classList.add("chat-col-hidden");
}
