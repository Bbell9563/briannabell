
function getNumbers(){
  var userInput = document.getElementById("userNumberInput").value
  var numArray = []
  var lotteryNumbers = document.getElementById("lotteryNumberHolder")
  var error = document.getElementById("error")
  event.preventDefault()
  error.style = "display:none;"
  lotteryNumbers.innerHTML = ""
  if(userInput > 8 || userInput < 1){
    error.style= "display:block;"
  }
  else{
    while(userInput > 0){
      numArray.push(Math.floor(Math.random() * 100))
      userInput -= 1
    }
    for(var i = 0; i < numArray.length; i++){
      lotteryNumbers.innerHTML += `<h1 class="lottery-Number">${numArray[i]}</h1>`
    }
    document.getElementById("results").style = "display: block;"
  }
}