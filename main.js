// Capitalizes the first letter of a string
function capitalize(x) {
  return x.charAt(0).toUpperCase() + x.slice(1);
}

// Reverses a string
function reverseString(x) {
  return x.split("").reverse().join("");
}

// Adds a and b
function add(a, b) {
  return parseFloat(a) + parseFloat(b);
}

// Subtracts a and b
function subtract(a, b) {
  return parseFloat(a) - parseFloat(b);
}

// Divides a and b
function divide(a, b) {
  return parseFloat(a) / parseFloat(b);
}

// Multiply a and b
function multiply(a, b) {
  return parseFloat(a) * parseFloat(b);
}

// Shifts string by x, maintains capitalization
function caesarCipher(toShift, x) {
  const toShiftArr = toShift.split("");
  return toShiftArr.reduce((acc, char) => acc + shiftChar(char, x), "");
}

// Shifts a char by x wraps from z->a and Z->A
function shiftChar(char, x) {
  const wrapOffset = 26;
  const a = 97;
  const z = 122;
  const A = 65;
  const Z = 90;
  let charCode = char.charCodeAt(0);

  if (charCode >= A && charCode <= Z) {
    // Uppercase Letter
    charCode += x;
    if (charCode > Z) charCode -= wrapOffset;
    return String.fromCharCode(charCode);
  } else if (charCode >= a && charCode <= z) {
    // Lowercase Letter
    charCode += x;
    if (charCode > z) charCode -= wrapOffset;
    return String.fromCharCode(charCode);
  }

  // Was not A-Z or a-z
  return char;
}

// Returns the average, min, max, and length of given array of ints
function analyzeArray(x) {
  const length = x.length;
  return {
    average: x.reduce((acc, val) => acc + val, 0) / length,
    min: Math.min(...x),
    max: Math.max(...x),
    length: length,
  };
}

module.exports = {
  capitalize,
  reverseString,
  add,
  subtract,
  divide,
  multiply,
  caesarCipher,
  analyzeArray,
};
