// add solution here
function theBeatlesPlay(array_m,array_i){
  var array_3 = []
  for(var i = 0; i<array_m.length; i++){
    array_3.push(array_m[i] + " plays " + array_i[i])
  }
  return array_3
}

function johnLennonFacts(array,facts){
  var x = 0
  var y = facts.length - 1
  while(facts.length > 0){
    array.push(facts[x] + "!!!")
    x++
    y--
  }
  return array
}


function iLoveTheBeatles(number){
  var array = []
  do{
    array.push("I love the Beatles!")
  }while(number<15)
  return array;
}
