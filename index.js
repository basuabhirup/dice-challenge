// Adding a handler function that will be triggered against a "click" on the button
document.querySelector(".btn").addEventListener("click",rollTheDice);



// Defining a custom rollTheDice function:
function rollTheDice () {

  var randomNumber1 = Math.floor(6 * Math.random()) + 1;
  var randomNumber2 = Math.floor(6 * Math.random()) + 1;

  document.querySelector(".img1").setAttribute("src", "images/dice" +
    randomNumber1 + ".png");
  document.querySelector(".img2").setAttribute("src", "images/dice" +
    randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
  } else {
    document.querySelector("h1").textContent = "Draw!";
  }

}
