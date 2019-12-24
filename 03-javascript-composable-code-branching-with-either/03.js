// const Either = Right || Left;

// [S] 01
  // const Right = x => ({
  //   map: f => Right(f(x)),
  //   inspect: () => `Right(${x})`
  // });
// [E] 01

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

// [S] 01
  // const Left = x => ({
  //   map: f => Left(x),
  //   inspect: () => `Left(${x})`
  // });
// [E] 01

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
});

// [S] 01
  // const result = Right(3).map(x => x + 1).map(x => x / 2);
// [E] 01

// [S] 02
  // const result = Left(3).map(x => x + 1).map(x => x / 2);
// [E] 02

// const result = Right(2).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x);
const result = Left(2).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x);

console.log(result);
