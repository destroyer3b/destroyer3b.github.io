var answers = ["c","b","a","d","a"], 
    tot = answers.length;

function getCheckedValue( radioName ){
    var radios = document.getElementsByName( radioName ); // Get radio group by-name
    for(var y=0; y<radios.length; y++)
      if(radios[y].checked) return radios[y].value; // return the checked value
}

function getScore(){
  var score = 0;
  for (var i=0; i<tot; i++)
    if(getCheckedValue("q"+i)===answers[i]) score += 1; // increment only
  return score;
}

function returnScore(){
  alert("Your score is "+ getScore() +"/"+ tot);
}