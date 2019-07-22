var katzDeliLine = [];

function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson);
  
  //return `Welcome, ${newPerson}. You have entered the line`;
  for(var i = 0; i < currentLine.length; i++){
    if(currentLine[i] === newPerson){
      return `Welcome, ${newPerson}. You are ${[i]} in the line.`
    }
  }
}

console.log(takeANumber(katzDeliLine, 'Billy'))