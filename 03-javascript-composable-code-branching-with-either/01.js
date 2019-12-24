// const Either = Right || Left;

const Right = x => ({
  map: f => Right(f(x)),
  inspect: () => `Right(${x})`
});

const result = Right(3).map(x => x + 1).map(x => x / 2);

console.log(result);
