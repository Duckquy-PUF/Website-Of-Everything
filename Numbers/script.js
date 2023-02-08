var decrease = document.getElementById("decrease");
var reset = document.getElementById("reset");
var increase = document.getElementById("increase");
var counter = document.getElementById("counter");

var homeButton = document.getElementById("homeButton");

let number = 0;

decrease.onclick = function() {
    number -= 1;
    counter.innerHTML = number;
}

reset.onclick = function() {
    number = 0;
    counter.innerHTML = number;
}

increase.onclick = function() {
    number += 1;
    counter.innerHTML = number;
}

homeButton.onclick = function () {
  window.location.href = "../index.html";
};