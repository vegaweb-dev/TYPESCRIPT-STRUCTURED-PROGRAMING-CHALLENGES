/*
Create a TypeScript function called formatProduct that receives:
productName: string (required)
price?: number (optional)
The function must return:
"productName - $price" if price is provided
"productName" if price is not provided
*/

const formatProduct = (productName: string, price?: number) =>
  price ? `${productName} - $${price}` : `${productName}`;

module.exports = { formatProduct };
