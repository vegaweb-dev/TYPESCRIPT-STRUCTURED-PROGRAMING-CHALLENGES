/*
Create a typed TypeScript function named calculateDiscount that receives:
price: number
discount?: number (optional, default value 0.1 → 10%)
The function should return the final price after applying the discount.
*/


const calculateDiscount = (price: number, discount: number = 0.1): number =>
	price - price * discount;


module.exports={calculateDiscount,}