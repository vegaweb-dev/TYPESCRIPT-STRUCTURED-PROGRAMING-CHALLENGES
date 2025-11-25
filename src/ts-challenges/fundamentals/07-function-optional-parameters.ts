/*
Write a TypeScript arrow function named formatHeadline that:
takes two parameters: headline: string and optional level?: number
returns a string
if level is provided, return the string "<h{level}>{headline}</h{level}>" (for example, level 2 → "<h2>My Title</h2>")
if level is not provided, return the headline unchanged
*/

const formatHeadLine = (headLine: string, level?: number): string =>
  level ? `<h${level}>${headLine}<h${level}>` : `${headLine}`;

module.exports = { formatHeadLine };
