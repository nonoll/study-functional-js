// [S] 01
  // const nextCharForNumberString = str => {
  //   const trimmed = str.trim();
  //   const number = parseInt(trimmed, 10);
  //   const nextNumber = number + 1;
  //   return String.fromCharCode(nextNumber);
  // }
// [E] 01

const nextCharForNumberString = str => String.fromCharCode(parseInt(str.trim(), 10) + 1);
const result = nextCharForNumberString('  64  ');

console.log(result);
