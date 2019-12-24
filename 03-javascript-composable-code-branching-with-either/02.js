// const Either = Right || Left;

const Right = x => ({
  map: f => Right(f(x)),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  map: f => Left(x),
  inspect: () => `Left(${x})`
});

// [S] 01
  // const result = Right(3).map(x => x + 1).map(x => x / 2);
// [E] 01
const result = Left(3).map(x => x + 1).map(x => x / 2);

console.log(result);
