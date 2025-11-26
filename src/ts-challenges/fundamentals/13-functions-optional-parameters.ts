/*
Create a function formatPhone that receives:
number: string (required)
countryCode?: string (optional)
Return:
"countryCode number" → if countryCode is provided
"number" → if not provided
*/


const formatPhone =(number:string, countryCode?:string):string=>countryCode ? `${countryCode}${number}`:`${number}`

module.exports={formatPhone,}