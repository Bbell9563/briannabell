// this is text 
var user1 = ""
var user2 = ""
var userTurn = ""
var turns = 1
var xLetter = '<img src="img/LetterX.png" alt="letter X">'
var oLetter = '<img src="img/LetterO.png" alt="letter 0">'


function inputUsers() {
  event.preventDefault()
  user1 = document.getElementById("player1").value
  user2 = document.getElementById("player2").value
  document.getElementById("form-holder").style = "display:none;"
  userTurn = user1
  document.getElementById("turn-display").innerHTML = `It's ${userTurn}'s Turn'`
}

function changeTurn() {
  turns++
  if (userTurn == user1) {
    userTurn = user2
  }
  else {
    userTurn = user1
  }
  
  document.getElementById("turn-display").innerHTML = `It's ${userTurn}'s Turn'`
}

function defineWinner(winner) {
  document.getElementById("winner").innerHTML = `The winner is ${winner}`
}

function checkForWin() {
  var grid1 = document.getElementById("grid-1").innerHTML
  var grid2 = document.getElementById("grid-2").innerHTML
  var grid3 = document.getElementById("grid-3").innerHTML
  var grid4 = document.getElementById("grid-4").innerHTML
  var grid5 = document.getElementById("grid-5").innerHTML
  var grid6 = document.getElementById("grid-6").innerHTML
  var grid7 = document.getElementById("grid-7").innerHTML
  var grid8 = document.getElementById("grid-8").innerHTML
  var grid9 = document.getElementById("grid-9").innerHTML
  if(turns == 10){
    document.getElementById("winner").innerHTML = "Its a tie"
  }
  else if (userTurn == user1) {
    if (grid1 == xLetter && grid2 == xLetter && grid3 == xLetter) { defineWinner(user1) }
    else if (grid4 == xLetter && grid4 == xLetter && grid6 == xLetter) { defineWinner(user1) }
    else if (grid7 == xLetter && grid8 == xLetter && grid9 == xLetter) { defineWinner(user1) }
    else if (grid1 == xLetter && grid4 == xLetter && grid7 == xLetter) { defineWinner(user1) }
    else if (grid2 == xLetter && grid5 == xLetter && grid8 == xLetter) { defineWinner(user1) }
    else if (grid3 == xLetter && grid6 == xLetter && grid9 == xLetter) { defineWinner(user1) }
    else if (grid1 == xLetter && grid5 == xLetter && grid9 == xLetter) { defineWinner(user1) }
    else if (grid3 == xLetter && grid5 == xLetter && grid7 == xLetter) { defineWinner(user1) }
  }
  else if (userTurn == user2){
    if (grid1 == oLetter && grid2 == oLetter && grid3 == oLetter) { defineWinner(user2) }
    else if (grid4 == oLetter && grid4 == oLetter && grid6 == oLetter) { defineWinner(user2) }
    else if (grid7 == oLetter && grid8 == oLetter && grid9 == oLetter) { defineWinner(user2) }
    else if (grid1 == oLetter && grid4 == oLetter && grid7 == oLetter) { defineWinner(user2) }
    else if (grid2 == oLetter && grid5 == oLetter && grid8 == oLetter) { defineWinner(user2) }
    else if (grid3 == oLetter && grid6 == oLetter && grid9 == oLetter) { defineWinner(user2) }
    else if (grid1 == oLetter && grid5 == oLetter && grid9 == oLetter) { defineWinner(user2) }
    else if (grid3 == oLetter && grid5 == oLetter && grid7 == oLetter) { defineWinner(user2) }
  }
  
}

function markSquare(square) {
  let currentSquare = document.getElementById(`${square}`).innerHTML
  if(currentSquare != ""){}
  else if (userTurn == user1) {
    document.getElementById(`${square}`).innerHTML = xLetter
    checkForWin()
    changeTurn()
  }
  else {
    document.getElementById(`${square}`).innerHTML = oLetter
    checkForWin()
    changeTurn()
  }
  
  
}