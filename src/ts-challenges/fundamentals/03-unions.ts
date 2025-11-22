/*
Create three variables using union types:
identifier: can be string or number
status: can be boolean or string
value: can be number or null
Assign a valid value to each variable and print them with console.log.
*/

const identifier: string | number = 45;
const status: boolean | string = "ABC123";
const value: number | null = null;

module.exports = {
  identifier,
  status,
  value,
};
