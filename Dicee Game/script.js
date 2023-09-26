var leftImage = Math.floor(Math.random() * 6 + 1);

var randomLeftImage = "images/dice" + leftImage + ".png";

document.querySelectorAll("img")[0].setAttribute("src", randomLeftImage);

// Right Image

var rightImage = Math.floor(Math.random() * 6 + 1);

var randomRightImage = "images/dice" + rightImage + ".png";

document.querySelectorAll("img")[1].setAttribute("src", randomRightImage);

// Conditions

if (leftImage > rightImage) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (leftImage < rightImage) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
  document.querySelector("h1").innerHTML = "Draw";
}
