var katzDeliLine = [];

function takeANumber(currentLine, newPerson){
  currentLine.push(newPerson);
  
  for(var i = 0; i < currentLine.length; i++){
    if(currentLine[i] === newPerson){
      return `Welcome, ${newPerson}. You are number ${parseInt([i]) +1} in line.`
    }
  }
}

console.log(takeANumber(katzDeliLine, 'Ada'));
console.log(takeANumber(katzDeliLine, 'Grace'));
console.log(takeANumber(katzDeliLine, 'Kent'));

function nowServing(currentLine){
  
}