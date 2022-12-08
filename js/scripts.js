// chat open
document.querySelector(".header-links-chat").addEventListener("click", function () {
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
