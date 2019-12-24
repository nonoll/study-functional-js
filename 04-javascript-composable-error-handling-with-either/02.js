// const Either = Right || Left;

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left(${x})`
});

const fromNullTable = x => x ? Right(x) : Left(null);

const fs = require('fs');

const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
}

const getPort = () => 
  tryCatch(() => fs.readFileSync('config.json'))
    .map(str => JSON.parse(str))
    .fold(
      e => 3000,
      config => config.port
    );

const result = getPort();

console.log(result);
