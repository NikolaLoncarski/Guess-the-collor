const newGame = document.querySelector(".new-game");
const rgbTop = document.querySelector(".rgb-top");
const rgb = document.querySelector(".rgb");
const gameScore = document.querySelector(".score");
const gameOver = document.querySelector(".rgb-down");
let clickCounter = 0;

gameScore.textContent = 4;
gameScore.style.opacity = 0;
///Click counter
newGame.onclick = function () {
  clickCounter += 1;
  console.log(clickCounter);
  if (clickCounter === 2) {
    location.reload();
  }
};

//random RGB color generator
function getRandomRgb() {
  let num = Math.round(0xffffff * Math.random());
  let r = num >> 16;
  let g = (num >> 8) & 255;
  let b = num & 255;
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
gameScore.textContent = 4;
newGame.addEventListener("click", gameFunction);

function gameFunction() {
  //random div collor 1
  gameScore.style.opacity = 1;
  let newDiv1 = document.createElement("div");
  newDiv1.classList.add("newColor1");
  rgbTop.appendChild(newDiv1);

  let newColor1 = document.querySelector(".newColor1");
  newColor1.style.backgroundColor = getRandomRgb();

  let ht1 = window
    .getComputedStyle(newColor1, null)
    .getPropertyValue("background-color");

  //random div collor 2
  let newDiv2 = document.createElement("div");
  newDiv2.classList.add("newColor2");
  rgbTop.appendChild(newDiv2);

  let newColor2 = document.querySelector(".newColor2");
  newColor2.style.backgroundColor = getRandomRgb();

  let ht2 = window
    .getComputedStyle(newColor2, null)
    .getPropertyValue("background-color");

  //random div collor 3
  let newDiv3 = document.createElement("div");
  newDiv3.classList.add("newColor3");
  rgbTop.appendChild(newDiv3);

  let newColor3 = document.querySelector(".newColor3");
  newColor3.style.backgroundColor = getRandomRgb();

  let ht3 = window
    .getComputedStyle(newColor3, null)
    .getPropertyValue("background-color");

  //random div collor 4
  let newDiv4 = document.createElement("div");
  newDiv4.classList.add("newColor4");
  rgbTop.appendChild(newDiv4);

  let newColor4 = document.querySelector(".newColor4");
  newColor4.style.backgroundColor = getRandomRgb();

  let ht4 = window
    .getComputedStyle(newColor4, null)
    .getPropertyValue("background-color");

  // Game display
  const randomColor = [ht1, ht2, ht3, ht4];

  const displayRandom = randomColor[Math.floor(Math.random() * 3) + 1];
  console.log(displayRandom);
  rgb.innerHTML = displayRandom;

  // game logic
  const focus1 = document.querySelector(".newColor1");
  const focus2 = document.querySelector(".newColor2");
  const focus3 = document.querySelector(".newColor3");
  const focus4 = document.querySelector(".newColor4");

  const focusElem = [focus1, focus2, focus3, focus4];

  console.log(focusElem);
  for (const elem of focusElem) {
    if (
      window
        .getComputedStyle(elem, null)
        .getPropertyValue("background-color") === displayRandom
    ) {
      elem.addEventListener("click", function () {
        document.querySelector(".rgb-top").innerHTML = "";
        gameFunction();
      });
      gameScore.textContent = Number(gameScore.textContent) + 1;
    } else {
      elem.addEventListener("click", function () {
        gameScore.textContent = Number(gameScore.textContent) - 1;
        if (gameScore.textContent === "0") {
          rgbTop.remove();
          gameOver.style.opacity = "1";
        }
      });
    }
  }
}
