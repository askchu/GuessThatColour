var numOfSquares = 6;
var picked;
var colors = [];
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButton = document.querySelectorAll(".mode");

init();

function init(){
    //mode buttons event listeners
    setupModeButtons();
    setupSquares();
    reset();
}

function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        // add click listeners to squares
      squares[i].addEventListener("click", function(){
          // grab color of clicked square
          var clickedColor = this.style.backgroundColor;
          // compare color to pickedColor
          if(clickedColor === picked){
              messageDisplay.textContent = "Correct";
              resetButton.textContent = "Play Again?";
              changeColors(clickedColor);
              h1.style.backgroundColor = clickedColor;
          } else {
              this.style.backgroundColor = "#232323";
              messageDisplay.textContent = "Try Again";
          }
      });
  }
}

function setupModeButtons(){
    for(var i = 0; i < modeButton.length; i++){
        modeButton[i].addEventListener("click", function(){
            modeButton[0].classList.remove("selected");
            modeButton[1].classList.remove("selected");
            modeButton[2].classList.remove("selected");
            this.classList.add("selected");
    
            // this.textContent === "Easy" ? numOfSquares = 3: numOfSquares = 6; //shorter version for if/else 
            if(this.textContent === "Easy"){
                numOfSquares = 3;
            } else if (this.textContent === "Expert") {
                numOfSquares = 9;
            } else {
                numOfSquares = 6;
            }
            reset();
        });
    }
}


function reset(){
    colors = generateRandomColors(numOfSquares);
    // pick a new random color from array
    picked = pickedColor();
    // change colorDisplay to match picked Color
    colorDisplay.textContent = picked;
    resetButton.textContent = picked;
    // change colors of squares
    messageDisplay.textContent = "";
    resetButton.textContent = "New Colors";
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }   
    h1.style.backgroundColor = "steelblue";
}


resetButton.addEventListener("click", function(){
   reset();
});




function changeColors(color){
    // loop through all squares
    for(var i = 0; i < squares.length; i++){
    // change each color to match given color
        squares[i].style.backgroundColor = color;       
    }
}

function pickedColor(){
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num){
    // make an array
    var arr = []
    // repeat num times
    for(var i = 0; i < num; i++){
        // get random color and push into arr
        arr.push(randomColor());
    }
    // return that array
    return arr;
}

function randomColor(){
    // pick a "red" from 0 - 255
    var r = Math.floor(Math.random() * 256);
    // pick a green from 0 - 255
    var g = Math.floor(Math.random() * 256);
    // pick a blue from 0 - 255
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}
