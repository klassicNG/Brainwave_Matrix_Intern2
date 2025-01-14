// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

var MainImg = document.getElementById("MainImg");
var smallImg = document.getElementsByClassName("small-img");

for (var i = 0; i < smallImg.length; i++) {
  smallImg[i].onclick = function () {
    MainImg.src = this.src; // 'this' refers to the clicked small image
  };
}
