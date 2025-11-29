/*
Create a typed TypeScript function named getUserTuple that receives:
name: string
age: number
The function must:
Return a tuple of exactly two elements:
[name, age]
Example:
getUserTuple("Ana", 30) → ["Ana", 30]
*/

type typeOfOutput = [string, number];
const getUserTuple = (name: string, age: number): typeOfOutput => {
  return [name, age] as typeOfOutput;
};

module.exports = { getUserTuple };
