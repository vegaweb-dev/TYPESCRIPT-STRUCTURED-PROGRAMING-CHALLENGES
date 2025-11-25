/*
Create a TypeScript function called formatPrice that receives:
productName: string (required)
price?: number (optional)
The function must return:
"productName costs $price" if price is provided
"productName price not available" if price is not provided
*/


const formatPrice =(productName:string,price?:number):string=>price? `${productName} costs ${price}`:`${productName} price not available`

module.exports={
    formatPrice,
}