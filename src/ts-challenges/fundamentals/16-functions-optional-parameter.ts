/*
Create a TypeScript function named formatOrder that receives:
item: string (required)
quantity?: number (optional)
Return:
"item x quantity" if quantity is provided (example: "apple x 3")
"item" if quantity is NOT provided
*/

const formatOrder = (item: string, quantity?: string): string =>
  quantity ? `${item} x ${quantity}` : `${item}`;

module.exports = { formatOrder };
