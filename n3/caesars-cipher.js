function rot13(str) {
  let decodedStr = "";

  for (let i = 0; i < str.length; i++) {
    let charCode = str.charCodeAt(i);

    // Check if the character is an uppercase letter (A-Z)
    if (charCode >= 65 && charCode <= 90) {
      // Apply the ROT13 shift
      let decodedCharCode = charCode + 13;

      // If the shifted value goes beyond Z, wrap around
      if (decodedCharCode > 90) {
        decodedCharCode = 65 + (decodedCharCode - 91);
      }

      decodedStr += String.fromCharCode(decodedCharCode);
    } else {
      // If it's not an uppercase letter, keep it as is
      decodedStr += str[i];
    }
  }

  return decodedStr;
}