const divRgb = document.querySelector(".rgb");
let r, g, b;

const getColor = () => {
  r = Math.floor(Math.random() * 255);
  g = Math.floor(Math.random() * 255);
  b = Math.floor(Math.random() * 255);
  //   console.log(r, g, b);
  document.body.style.background = `rgb(${r}, ${g}, ${b})`;
  divRgb.textContent = `rgb(${r}, ${g}, ${b})`;
};

// rgb();
// document.body.style.background = `rgb(${r}, ${g}, ${b})`;
// divRgb.textContent = `rgb(${r}, ${g}, ${b})`;

// setInterval(() => {
//   rgb();
//   document.body.style.background = `rgb(${r}, ${g}, ${b})`;
//   divRgb.textContent = `rgb(${r}, ${g}, ${b})`;
// }, 2000);

getColor();

setInterval(getColor, 2000);
