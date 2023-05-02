// slider javascript

const left = document.querySelector(".slider_button--left");
const right = document.querySelector(".slider_button--right");

const slide = document.querySelector(".slider-container");


var count = 0;

right.addEventListener("click", () => {
    count = count - 294;
    slide.style.left = count + "px";
});


left.addEventListener("click", () => {
  count = count + 294;
  slide.style.left = count + "px";
});

// slider js end