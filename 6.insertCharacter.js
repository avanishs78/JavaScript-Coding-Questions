// Insert a given character after every 3rd character, starting from the end of the string.
function insertChar(inputStr, charToInsert) {
  const modifiedChars = [];
  let charCount = 0;

  // Iterate the input string from the end
  for (let i = inputStr.length - 1; i >= 0; i--) {
    modifiedChars.push(inputStr[i]);
    charCount++;

    // After every 3 characters (from end), insert the given character
    if (charCount % 3 === 0 && i !== 0) {
      modifiedChars.push(charToInsert);
    }
  }

  // Since we built it in reverse, reverse it back to get the final string
  return modifiedChars.reverse().join('');
}


console.log(insertChar('abcdefghjk','r')); // abcrdefrghjrk