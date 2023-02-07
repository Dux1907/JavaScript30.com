let hour = document.getElementById("hour");
let minute = document.getElementById("minute");
let second = document.getElementById("second");
let time = document.getElementById("time");
function change() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  //For displaying time as text
  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;
  time.innerText = `${hours}:${minutes}:${seconds}`;
  // for displaying time in clock
  hours = hours * 30 + minutes / 2;
  minutes = minutes * 6 + seconds / 10;
  hour.style.transform = `rotate(${hours}deg)`;
  minute.style.transform = `rotate(${minutes}deg)`;
  second.style.transform = `rotate(${seconds * 6}deg)`;
}

setInterval(change, 1000);
