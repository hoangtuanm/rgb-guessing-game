var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDispaly = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function() {
  //generate all new colors
  colors = generateRandomColors(6);
  //pick new random colors
  pickedColor = pickColor(); 
  //change colorDisplay to match picked Color
  colorDispaly.textContent = pickedColor;
  //change colors of squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.background = colors[i];
  }
  h1.style.background = "steelblue"; 
});

colorDispaly.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];
  
  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of picked square
    var clickedColor = this.style.background;
    console.log(clickedColor, pickedColor);
    if (clickedColor === pickedColor) {
      messageDisplay.textContent = "Correct!";
      changeColor(clickedColor);
      h1.style.background = clickedColor;
      resetButton.textContent = "Play Again"
    } else {
      this.style.background = "#232323";
      messageDisplay.textContent = "Try Again"; 
    }
    //compare color to pickedColor
  });
}

function changeColor(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
  //change each color to match given color
    squares[i].style.background = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //push random color from arr
    arr.push(randomColor());
  }
  //return that array
  return arr;
}

function randomColor() {
  //pic a red from 0 - 255
  var r = Math.floor(Math.random() * 256);
  //pic a green from 0 - 255
  var g = Math.floor(Math.random() * 256);
  //pic a blue from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

























