var prev = document.getElementById("prev");
var next = document.getElementById("next");
var thumbnail = document.getElementsByClassName("thumbnail");
var heading = document.getElementById("heading");
var backgroundImg = new Array(
  "images/Aurora1.jpg",
  "images/Aurora2.jpg",
  "images/Aurora3.jpg",
  "images/Aurora4.jpg",
  "images/Aurora5.jpg"
);
let i = 0;
next.onclick = function () {
  if (i < 4) {
    heading.style.backgroundImage = 'url("' + backgroundImg[i + 1] + '")';
    thumbnail[i + 1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i++;
  }
};

prev.onclick = function () {
  if (i > 0) {
    heading.style.backgroundImage = 'url("' + backgroundImg[i - 1] + '")';
    thumbnail[i - 1].classList.add("active");
    thumbnail[i].classList.remove("active");
    i--;
  }
};
