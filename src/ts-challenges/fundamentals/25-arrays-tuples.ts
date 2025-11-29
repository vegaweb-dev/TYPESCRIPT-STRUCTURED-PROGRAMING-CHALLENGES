/*
Create a typed TypeScript function named filterLongWords that receives:
words: string[]
minLength: number
The function must:
Return a new array containing only the words whose length is greater than or equal to minLength.
Examples:
filterLongWords(["hi","hello","typescript"], 5) → ["hello","typescript"]
filterLongWords(["a","bb","ccc"], 2) → ["bb","ccc"]
*/

const filterLongWords = (words: string[], minLength: number): string[] =>
  words.filter((el) => el.length >= minLength);

module.exports = { filterLongWords };
