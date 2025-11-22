/*
Create a typed function named sum that:
Takes two parameters, both of type number
Returns a number (their sum)
Print the result of calling sum(5, 7)
*/

const sum = (num1: number, num2: number): number => {
  return num1 + num2;
};

module.exports = {
  sum,
};
