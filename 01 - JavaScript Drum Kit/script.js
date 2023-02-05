function transition(e) {
    e.style.color = 'red';
}

document.addEventListener("keydown", function (e) {
  if (e.key === "a") clap.play();
  if (e.key == "s") hihat.play();
  if (e.key == "d") kick.play();
  if (e.key == "f") openhat.play();
  if (e.key == "g") boom.play();
  if (e.key == "h") ride.play();
  if (e.key == "j") snare.play();
  if (e.key == "k") tom.play();
    if (e.key == "l") tink.play();
    transition(e)
});
