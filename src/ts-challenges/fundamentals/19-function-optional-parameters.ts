/*
Create a typed TypeScript function named greet that receives:
firstName: string
lastName?: string (optional, default value "Doe")
The function should return a string:
If both names are provided → "Hello, John Smith!"
If lastName is not provided → "Hello, John Doe!"
*/

const greet =(firstName:string,lastName:string="Doe"):string=>`Hello, ${firstName} ${lastName}!`

module.exports={greet,}