// A capitalize function that takes a string and returns it with the first character capitalized.
export function capitalize(str) {
  const arr = str.split('');
  arr[0] = arr[0].toUpperCase();
  return arr.join('');
}

// A reverseString function that takes a string and returns it reversed.
export function reverseString(str) {
  const arr = str.split('');
  return arr.reverse().join('');
}

// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply.
// Each of these functions should take two numbers and return the correct calculation.

export const calculatorObj = {
  add: function add(x, y) {
    return x + y;
  },
  subtract: function subtract(x, y) {
    return x - y;
  },
  divide: function divide(x, y) {
    return x / y;
  },
  multiply: function multiply(x, y) {
    return x * y;
  },
};

function shiftAlphabet(shiftFactor) {
  if (!Number.isInteger(shiftFactor)) {
    throw new Error('shiftFactor must be an integer');
  }

  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const shifts =
    ((shiftFactor % alphabet.length) + alphabet.length) % alphabet.length;

  return alphabet.slice(shifts).concat(alphabet.slice(0, shifts));
}

export function caesarCipher(string, shiftFactor) {
  const alphabet = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  const shiftedAlphabet = shiftAlphabet(shiftFactor);
  const stringToArr = string.split('');
  let shiftedWord = '';

  for (let i = 0; i < stringToArr.length; i++) {
    const char = stringToArr[i];
    const lower = char.toLowerCase();

    const index = alphabet.indexOf(lower);

    // FIX #1: index === -1 means “not found”
    if (index === -1) {
      shiftedWord += char;
      continue;
    }

    // FIX #2: preserve case
    const shifted = shiftedAlphabet[index];
    shiftedWord +=
      char === char.toUpperCase() ? shifted.toUpperCase() : shifted;
  }

  return shiftedWord;
}

// An analyzeArray function that takes an array of numbers and returns an object with the
// following properties: average, min, max, and length.

export function averageOfArray(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }

  return total / arr.length;
}

export function minOfArray(arr) {
  let min = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }

  return min;
}

export function maxOfArray(arr) {
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i];
  }

  return max;
}

export function analyzeArray(arr) {
  const average = averageOfArray(arr);
  const min = minOfArray(arr);
  const max = maxOfArray(arr);

  return {
    average: average,
    minimum: min,
    maximum: max,
    lengthOfArray: arr.length,
  };
}
