const functions = require("./main");

test("Capitalize function", () => {
  expect(functions.capitalize("string")).toMatch(/String/);
  expect(functions.capitalize("1234")).toMatch(/1234/);
});

test("Reverse String Function", () => {
  expect(functions.reverseString("racecar")).toMatch(/racecar/);
  expect(functions.reverseString("string")).toMatch(/gnirts/);
  expect(functions.reverseString("testingtestingtesting")).toMatch(
    /gnitsetgnitsetgnitset/
  );
});

test("Calculator add", () => {
  expect(functions.add(2, 2)).toEqual(4);
  expect(functions.add(2, 0)).toEqual(2);
  expect(functions.add("2", 2)).toEqual(4);
  expect(functions.add(2, "2")).toEqual(4);
  expect(functions.add(2.5, 2)).toBeCloseTo(4.5);
  expect(functions.add(2, 2.541)).toBeCloseTo(4.541);
});

test("Calculator subtract", () => {
  expect(functions.subtract(2, 5)).toEqual(-3);
  expect(functions.subtract(2, 2)).toEqual(0);
  expect(functions.subtract("2", 2)).toEqual(0);
  expect(functions.subtract(2, "2")).toEqual(0);
  expect(functions.subtract(2.5, 2)).toBeCloseTo(0.5);
  expect(functions.subtract(2, 2.541)).toBeCloseTo(-0.541);
});

test("Calculator divide", () => {
  expect(functions.divide(1, 1)).toEqual(1);
  expect(functions.divide(22, 7)).toBeCloseTo(3.14);
  expect(functions.divide("2", 4)).toBeCloseTo(0.5);
  expect(functions.divide(2, "4")).toBeCloseTo(0.5);
  expect(functions.divide(10, 15)).toBeCloseTo(0.66666);
});

test("Calculator multiply", () => {
  expect(functions.multiply(1, 1)).toEqual(1);
  expect(functions.multiply(1, 0)).toEqual(0);
  expect(functions.multiply(10, 5)).toEqual(50);
  expect(functions.multiply("2", 4)).toEqual(8);
  expect(functions.multiply(2, "4")).toEqual(8);
  expect(functions.multiply(10.8, 10.8)).toBeCloseTo(116.64);
});

test("Caesar cipher", () => {
  expect(functions.caesarCipher("string", 26)).toMatch(/string/);
  expect(functions.caesarCipher("string", 10)).toMatch(/cdbsxq/);
  expect(functions.caesarCipher("String", 26)).toMatch(/String/);
  expect(functions.caesarCipher("STRing", 10)).toMatch(/CDBsxq/);
  expect(functions.caesarCipher("STR1!@Ng", 10)).toMatch(/CDB1!@Xq/);
});

const testObject1 = {
  average: 4,
  min: 1,
  max: 8,
  length: 6,
};

const testObject2 = {
  average: 6,
  min: 2,
  max: 10,
  length: 5,
};

test("Analyze array", () => {
  expect(functions.analyzeArray([1, 8, 3, 4, 2, 6])).toMatchObject(testObject1);
  expect(functions.analyzeArray([4, 8, 2, 10, 6])).toMatchObject(testObject2);
});
