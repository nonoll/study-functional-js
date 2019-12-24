// [S] 04
  // const Box = x => ({
  //   map: f => Box(f(x)),
  //   inspect: () => `Box(f(${x}))`
  // });
// [E] 04

const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(f(${x}))`
});

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

// [S] 03
  // const nextCharForNumberString = str => 
  //   [str]
  //     .map(s => s.trim())
  //     .map(s => parseInt(s, 10))
  //     .map(i => i + 1)
  //     .map(i => String.fromCharCode(i));
// [E] 03

// [S] 04
  // const nextCharForNumberString = str => 
  //   Box(str)
  //     .map(s => s.trim())
  //     .map(r => new Number(r))
  //     .map(i => i + 1)
  //     .map(i => String.fromCharCode(i))
  //     .map(c => c.toLowerCase());
// [E] 04

const nextCharForNumberString = str => 
  Box(str)
    .map(s => s.trim())
    .map(r => new Number(r))
    .map(i => i + 1)
    .map(i => String.fromCharCode(i))
    .fold(c => c.toLowerCase());

const result = nextCharForNumberString('  64  ');

console.log(result);
