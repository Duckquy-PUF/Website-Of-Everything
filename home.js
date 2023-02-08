var name = window.prompt("What would you like to be called?");

if(name.length > 0) {
    document.getElementById("headerOne").innerHTML = "Welcome, " + name + "!";
}
else {
    document.getElementById("headerOne").innerHTML = "Welcome, Random User!";   
}

var counterPageBtn = document.getElementById("counterPageButton");
var gamesPageBtn = document.getElementById("gamesPageButton");
var aboutPageBtn = document.getElementById("aboutPageButton");

counterPageBtn.onclick = function() {
    window.location.href = "Numbers/numbers.html";
}

gamesPageBtn.onclick = function() {
    window.location.href = "Games/games.html";
}

aboutPageBtn.onclick = function() {
    window.location.href = "About/about.html";
}