/*
Create a function formatAddress that receives:
street: string (required)
city?: string (optional)
Return:
"street, city" → if city is provided
"street" → if city is NOT provided
*/



const formatAddress =(street:string,city?:string):string=>city? `${street},${city}`:`${street}`

module.exports={formatAddress,}