let blur = document.getElementById("blur");
let spacing = document.getElementById("spacing");
let img = document.getElementById("img");
let faint = document.getElementById("faint");
let space = document.getElementById("space");

blur.onclick = (event) => {
  let x = (event.offsetX * 10) / blur.offsetWidth;
  let y = (event.offsetX * 100) / blur.offsetWidth;
  faint.style.width = `${y}%`;
  img.style.filter = `blur(${x}px)`;
};
spacing.onclick = (event) => {
  let x = (event.offsetX * 100) / spacing.offsetWidth;
  console.log(x);
  let y = (event.offsetX * 100) / spacing.offsetWidth;
  space.style.width = `${y}%`;
  img.style.border = `${x}px`;
  img.style.borderColor = "cornsilk";
  img.style.borderStyle = "solid";
};
//document.onclick = () => {
 // img.style.borderColor = head.value;
//};
setInterval(function(){
img.style.borderColor = head.value;},50);
