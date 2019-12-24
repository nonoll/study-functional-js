// const Either = Right || Left;

// [S] 03
  // const Right = x => ({
  //   map: f => Right(f(x)),
  //   fold: (f, g) => g(x),
  //   inspect: () => `Right(${x})`
  // });
// [E] 03

const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right(${x})`
});

// [S] 03
  // const Left = x => ({
  //   map: f => Left(x),
  //   fold: (f, g) => f(x),
  //   inspect: () => `Left(${x})`
  // });
// [E] 03

const Left = x => ({
  chain: f => Left(x),
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

// [S] 02
  // const getPort = () => 
  //   tryCatch(() => fs.readFileSync('config.json'))
  //     .map(str => JSON.parse(str))
  //     .fold(
  //       e => 3000,
  //       config => config.port
  //     );
// [E] 02

// [S] 03
// const getPort = () => 
//   tryCatch(() => fs.readFileSync('config.json'))
//     // config 에 data 가 없을 경우 고려
//     .map(str => tryCatch(() => JSON.parse(str)))
//     .fold(
//       e => 3000,
//       config => config.port
//     );
// [E] 03

const getPort = () => 
  tryCatch(() => fs.readFileSync('config.json'))
    // config 에 data 가 없을 경우 고려
    .chain(str => tryCatch(() => JSON.parse(str)))
    .fold(
      e => 3000,
      config => config.port
    );

const result = getPort();

console.log(result);
