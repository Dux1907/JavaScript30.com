// function transition(e) {
//     e.style.color = 'red';
// }

// document.addEventListener("keydown", function (e) {
//   if (e.key === "a") clap.play();
//   if (e.key == "s") hihat.play();
//   if (e.key == "d") kick.play();
//   if (e.key == "f") openhat.play();
//   if (e.key == "g") boom.play();
//   if (e.key == "h") ride.play();
//   if (e.key == "j") snare.play();
//   if (e.key == "k") tom.play();
//     if (e.key == "l") tink.play();
//     transition(e)
// });

//Selecting an audio when a key is pressed along with its key to play the sound and add transition.
window.addEventListener('keydown', function (e){
  let audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`)
  let key = document.querySelector(`div[data-key = "${e.keyCode}"]`)
  if (!audio) return;
  audio.currentTime = 0
  audio.play()
  key.classList.add('inprogress')
});

const keys = document.querySelectorAll('.key')

//added eventListener to remove the transition after x seconds
keys.forEach(key => key.addEventListener('transitionend',function remove(e){
  // console.log(key)
  if (e.propertyName !== 'transform') return;
  console.log(this.classList)
  this.classList.remove('inprogress')
}))