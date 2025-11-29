/*
Create a typed TypeScript function named sumNumbers that receives:
values: number[]
The function must:
Return the sum of all numbers in the array.
If the array is empty, return 0.
Examples:
sumNumbers([1, 2, 3]) → 6
sumNumbers([]) → 0
*/

const sumNumbers = (values: number[]): number =>
	values.length === 0
		? 0
		: values.reduce(
				(previousValue, currentValue) => previousValue + currentValue
			);

module.exports = { sumNumbers };
