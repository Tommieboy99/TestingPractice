import {
  capitalize,
  reverseString,
  calculatorObj,
  caesarCipher,
  averageOfArray,
  minOfArray,
  maxOfArray,
  analyzeArray,
} from '../index.js';

test('first character capitalized', () => {
  expect(capitalize('kaasje')).toBe('Kaasje');
  expect(capitalize('noMan')).toBe('NoMan');
  expect(capitalize('No./Man')).toBe('No./Man');
});

test('reverse string', () => {
  expect(reverseString('kaasje')).toBe('ejsaak');
  expect(reverseString('yes')).toBe('sey');
});

test('calculator operations', () => {
  expect(calculatorObj.add(5, 5)).toBe(10);
  expect(calculatorObj.subtract(5, 5)).toBe(0);
  expect(calculatorObj.divide(9, 3)).toBe(3);
  expect(calculatorObj.multiply(5, 5)).toBe(25);
});

test('shifted word', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('average of array', () => {
  expect(averageOfArray([3, 3, 3])).toBe(3);
});

test('minimum of array', () => {
  expect(minOfArray([4, 2, 6, 1])).toBe(1);
});

test('maximum of array', () => {
  expect(maxOfArray([10, 2, 4, 15])).toBe(15);
});

test('obj of avg, min, max, length of array', () => {
  expect(analyzeArray([5, 5, 5, 5])).toStrictEqual({
    average: 5,
    minimum: 5,
    maximum: 5,
    lengthOfArray: 4,
  });
});
