
function generateStory() {
  var noun1 = document.getElementById("noun-1").value
  var noun2 = document.getElementById("noun-2").value
  var verb1 = document.getElementById("verb-1").value
  var verb2 = document.getElementById("verb-2").value
  var adjective1 = document.getElementById("adjective-1").value
  var adjective2 = document.getElementById("adjective-2").value

  var story = `
  A long time ago there lived a ${noun1} with a ${adjective1} heart. The ${noun1} set out
  to ${verb1} the world. The noun1 meet a ${adjective2} ${noun2}. ${noun2} stopped ${noun1} from ${verb1} 
  the world with a ${verb2}. Thats the end of this horrible story
  `


  document.getElementById("story").innerHTML = story
  document.getElementById("multiple-input-holder").style = "display:none"
  document.getElementById("story-holder").style = "display:block"
}


/*
A long time ago there lived a ${noun1} with a ${adjective1} heart. The ${noun1} set out
to ${verb1} the world. The noun1 meet a ${adjective2} ${noun2}. ${noun2} stopped ${noun1} from ${verb1}
the world with a ${verb2}. Thats the end of this horrible story


*/