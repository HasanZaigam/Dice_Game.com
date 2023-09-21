var random_var1 = Math.floor(Math.random() * 6) + 1;
var randomDice1 = "images/dice" + random_var1 + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomDice1);

var random_var2 = Math.floor(Math.random() * 6) + 1;
var randomDice2 = "images/dice" + random_var2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomDice2);

if (random_var1 > random_var2) {
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
} else if (random_var1 < random_var2) {
    document.querySelector("h1").innerHTML = "🚩 Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}