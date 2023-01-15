const colors = document.querySelectorAll('.slider-color');
let current = 0;

function slider() {
  for (let i = 0; i < colors.length; i++) {
    colors[i].classList.remove('active');
  }
  colors[current].classList.add('active');
  current = (current + 1) % colors.length;
}

setInterval(slider, 3000);
