/*
Create a TypeScript function named formatWeather that receives:
temperature: number (required)
condition?: string (optional)
The function must return:
"Temperature: X°, Condition: Y" → if condition is provided
"Temperature: X°" → if condition is NOT provided
*/


const formatWeather=(temperature:string, condition?:string):string=>condition? `Temperature: ${temperature}, Condition: ${condition}`:`Temperature: ${temperature}`


module.exports={formatWeather,}