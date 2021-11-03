
var userName = window.prompt("Please enter your name", "name")
var age = window.prompt("Please enter your age", 0)
var birthMonth = window.prompt("Please enter birth month number", 0)
var birthStones = {
  1: "Garnet", 2: "Amethyst", 3: "Aquamarine", 4:"Diamond",5:"Emerald" ,
  6: "Alexandrite", 7: "Ruby", 8: "Peridot", 9: "Sapphire", 10:"Tourmaline",
  11: "Topaz", 12: "Blue Topaz"
}

let birthStone = getBirthstone(birthMonth, birthStones)


if(age < 50){
  alert(`Hello ${userName}. You are ${age} years old. You are still young! Your birthstone is ${birthStone}`)
  
}
else{
  alert(`Hello ${userName}. You are ${age} years old. Dang! You are old!Your birthstone is ${birthStone}`)
}

function getBirthstone(birthMonth, birthStones){
  for(var key in birthStones){
    if(key == birthMonth){
      return birthStones[key]
    }
  }
}

