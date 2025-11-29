/*
Create a typed TypeScript function that receives:
name: string
age?: number (optional)
The function must return a string with one of the following formats:
If age is provided → "Juan is 30 years old"
If age is NOT provided → "Juan did not provide an age"
*/

const formatSentence = (name: string, age?: number): string =>
  age ? `${name} is ${age} years old` : `${name} did not provide an age`;

module.exports = { formatSentence };
