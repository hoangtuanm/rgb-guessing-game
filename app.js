var colors = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",  
  "rgb(0, 0, 255)",
  "rgb(255, 0,255)"
];

var squares = document.querySelectorAll(".square");
var pickedColor = colors[3];
var colorDispaly = document.querySelector("#colorDisplay");

colorDispaly.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  //add initial colors to squares
  squares[i].style.background = colors[i];
  
  //add click listeners to squares
  squares[i].addEventListener("click", function() {
    //grab color of picked square
    var clickedColor = this.style.background;
    if (clickedColor === pickedColor) {
      alert("Correct!");
    } else {
      alert("Wrong!";
    }
    //compare color to pickedColor
  });
}