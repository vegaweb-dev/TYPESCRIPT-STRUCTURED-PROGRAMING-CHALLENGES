/*
Create a typed TypeScript function named repeatText that receives:
text: string
times?: number (optional, default = 2)
The function should:
Return the text repeated times times.
If times is less than 1, return "Invalid repetition count".
*/

const repeatText = (text: string, times: number = 2): string => {
  let text1: string = "";
  if (times < 1) {
    text1 = "Invalid repetition count";
  }

  for (let i = 0; i < times; i++) {
    text1 += text;
  }

  return text1;
};

module.exports = { repeatText };
