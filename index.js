// ❗️ DON'T TOUCH THESE 2 FUNCTIONs
// Pre-made function that will fill the button with its number.
// First button top left is called 1, last button bottom right is 9

function fillButton(index, text) {
  // This function fills the button of the send index
  document.getElementById(index).innerHTML = text;
  if(text === "x")
  document.getElementById(index).style.color = "green";
  else 
  document.getElementById(index).style.color = "red";
}

// pre-made a function. You can use this function to present an alert to say someone wins
function winningAlert(winner) {
  setTimeout(function() {
    if (confirm(`Horraaay, ${winner} wins!`)) {
      // The code here will be exectued if you press on OK button that will pop on the window
      restartGame()
    }
  }, 0)
  
}
let turn = true
playArray = [
  {
    id: 1,
    type: "",
    clicked: false,
  },
  {
    id: 2,
    type: "",
    clicked: false,
  },
  {
    id: 3,
    type: "",
    clicked: false,
  },
  {
    id: 4,
    type: "",
    clicked: false,
  },
  {
    id: 5,
    type: "",
    clicked: false,
  },
  {
    id: 6,
    type: "",
    clicked: false,
  },
  {
    id: 7,
    type: "",
    clicked: false,
  },
  {
    id: 8,
    type: "",
    clicked: false,
  },
  {
    id: 9,
    type: "",
    clicked: false,
  },
];
// SAMPLE CODE: This code fills the 1st and 9th button with X and O initially
// ❗️ Delete this code once you are done testing
// fillButton(1, "X");
// fillButton(9, "O");

/**
 *
 * THE MAIN FUNCTION
 * This function gets executed every time the user clicks the button
 * Add your code here, since this is going to be your main function
 * That interacts with the UI
 */
function clickButton(index) {
  // first if for x turn else is for O turn 
  // checks if clicked before and changes value
  if(turn){
  playArray.forEach(symbObj => { 
    if(symbObj.id === index){
    if(!symbObj.clicked){
    symbObj.clicked = true; 
    symbObj.type = "x"
    fillButton(index, symbObj.type);
    turn = !turn
    checkWinner();

    }
    }
  });;
}
  else
  {
    playArray.forEach(symbObj => { 
      if(symbObj.id === index){
      if(!symbObj.clicked){
      symbObj.clicked = true; 
      symbObj.type = "o"
      fillButton(index, symbObj.type);
      turn = !turn
      checkWinner();

      }
      }
    });;
  }
}


function checkWinner(){
  //case1 for x
  if(playArray[0].type === "x" && playArray[1].type === "x" && playArray[2].type === "x") 
  winningAlert("player 1")
  //case2 for x
  else if(playArray[3].type === "x" && playArray[4].type === "x" && playArray[5].type === "x") 
  winningAlert("player 1")
  //case3 for x
  else if(playArray[6].type === "x" && playArray[7].type === "x" && playArray[8].type === "x") 
  winningAlert("player 1")
  //case4 for x
  else if(playArray[0].type === "x" && playArray[3].type === "x" && playArray[6].type === "x") 
  winningAlert("player 1")
  //case5 for x
  else if(playArray[1].type === "x" && playArray[4].type === "x" && playArray[7].type === "x") 
  winningAlert("player 1")
  //case6 for x
  else if(playArray[2].type === "x" && playArray[5].type === "x" && playArray[8].type === "x") 
  winningAlert("player 1")
  //case7 for x
  else if(playArray[0].type === "x" && playArray[4].type === "x" && playArray[8].type === "x") 
  winningAlert("player 1")
  //case8 for x
  else if(playArray[2].type === "x" && playArray[4].type === "x" && playArray[6].type === "x") 
  winningAlert("player 1")
  //case1 for o
  else if(playArray[0].type === "o" && playArray[1].type === "o" && playArray[2].type === "o") 
  winningAlert("player 2")
  //case2 for o
  else if(playArray[3].type === "o" && playArray[4].type === "o" && playArray[5].type === "o") 
  winningAlert("player 2")
  //case3 for o
  else if(playArray[6].type === "o" && playArray[7].type === "o" && playArray[8].type === "o") 
  winningAlert("player 2")
  //case4 for o
  else if(playArray[0].type === "o" && playArray[3].type === "o" && playArray[6].type === "o") 
  winningAlert("player 2")
  //case5 for o
  else if(playArray[1].type === "o" && playArray[4].type === "o" && playArray[7].type === "o") 
  winningAlert("player 2")
  //case6 for o
  else if(playArray[2].type === "o" && playArray[5].type === "o" && playArray[8].type === "o") 
  winningAlert("player 2")
  //case7 for o
  else if(playArray[0].type === "o" && playArray[4].type === "o" && playArray[8].type === "o") 
  winningAlert("player 2")
  //case8 for o
  else if(playArray[2].type === "o" && playArray[4].type === "o" && playArray[6].type === "o") 
  winningAlert("player 2")
  else {
    if(!playArray.some(symbObj => symbObj.clicked === false))
    tieAlert()
  }
  
  
}
function restartGame(){
  playArray.forEach(symbObj=> {
    symbObj.clicked = false; 
    symbObj.type = ""
    fillButton(symbObj.id, symbObj.type);
  })
  turn = true
}
function tieAlert(){
  alert("It's A TIE!!!")
  restartGame()
}

/**
 * (Optional) It's always a good idea to make a function for every single purpose.
 */
// function checkWinner
// function restartGame
