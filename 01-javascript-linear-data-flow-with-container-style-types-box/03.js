// [S] 01
  // const nextCharForNumberString = str => {
  //   const trimmed = str.trim();
  //   const number = parseInt(trimmed, 10);
  //   const nextNumber = number + 1;
  //   return String.fromCharCode(nextNumber);
  // }
// [E] 01

// [S] 02
  // const nextCharForNumberString = str => String.fromCharCode(parseInt(str.trim(), 10) + 1);
// [E] 02

const nextCharForNumberString = str => 
  [str]
    .map(s => s.trim())
    .map(s => parseInt(s, 10))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i));

const result = nextCharForNumberString('  64  ');

console.log(result);
