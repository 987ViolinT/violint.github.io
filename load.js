var i = 0;
var txt = "Hello, World!"
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typehello").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}