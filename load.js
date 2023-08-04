var i = 0;
var txt = "Hello, World!";
var speed = 150;

// Intro sequence for page load
function introSequence() {
    document.getElementById("typehello").innerHTML = "";
    setTimeout(typeWriter, 250);
}

// Typewriter function to print "Hello, World!"
function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typehello").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Load introSequence function on page start
window.addEventListener("load", function() {
    this.setTimeout(introSequence, 2500);
});