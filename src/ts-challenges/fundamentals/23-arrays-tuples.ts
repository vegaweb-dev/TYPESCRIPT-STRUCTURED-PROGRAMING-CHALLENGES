/*
Create a typed TypeScript function named getFirstThree that receives:
items: string[]
The function must:
Return a new array containing only the first three elements of the input.
If the array has fewer than 3 elements, return all available elements.
Examples:
getFirstThree(["a","b","c","d"]) → ["a","b","c"]
getFirstThree(["x"]) → ["x"]
*/


/*
--Solution 1
type maxThreeStrings = [] | [string] | [string,string] | [string,string,string] 
const getFirstThree = (items:string[]): maxThreeStrings=>{
    let copy:string[] = []

for(let i=0; i < copy.length; i++){
    if(i<3){
        copy.push(copy[i]!)
    }
}
return copy as maxThreeStrings
}
*/

//--Solution 2.

type maxThreeItems =[] | [string] | [string,string] |  [string,string,string]
const getFirstThree=(items:string[]):maxThreeItems=>items.slice(0,3) as maxThreeItems;

module.exports={getFirstThree}
