var i = 0;
var txt = "Hello, World!"
var speed = 150;

// typeWriter function - prints "Hello, World!"
function typeWriter() {
    document.getElementById("typehello").innerHTML = "The requested resource was not found on this server."
    setTimeout(typeWriter, 450)
    document.getElementById("typehello").innerHTML = ""
    setTimeout(typeWriter, 450)
    if (i < txt.length) {
        document.getElementById("typehello").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// Load typeWriter function on page start
window.addEventListener("load", function() {
    typeWriter();
});