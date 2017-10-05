function takeANumber(katzDeliLine, newName) {
  katzDeliLine.push(newName);
  return "Welcome, " + newName + ". You are number " + katzDeliLine.length + " in line.";
}

function nowServing(array) {
  if (array[0] != null) {
    return ('Currently serving ' + array.shift() + '.');
  } else {
    return ('There is nobody waiting to be served!');
  }
}

function currentLine(line) {

  if (line[0] == null) {
    return ('The line is currently empty.')
  } else {

  }
}
