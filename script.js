// typscript function
let typing = new Typed(".text", {
  strings: ["Frontend Developer", "Java Developer", "Fresher", "Web Developer"],
  typespeed: 100,
  backspeed: 100,
  backDelay: 1000,
  loop: true,
});

// about section script
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

// scrool top function
function scrolltop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// contact form
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzWBrfQOQHOExEsQBpUb7zGTeWgUuk7wSUdm3d0DrsQVeepUVNSmtOp8Upk0bW0PbrMwg/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Successfully submitted";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
