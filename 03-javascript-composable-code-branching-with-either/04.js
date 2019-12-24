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

const findColor = name => {
  const found = ({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' })[name];
  return found ? Right(found) : Left(null);
}

// [S] 01
  // const result = Right(3).map(x => x + 1).map(x => x / 2);
// [E] 01

// [S] 02
  // const result = Left(3).map(x => x + 1).map(x => x / 2);
// [E] 02

// [S] 03
  // const result = Right(2).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x);
  // const result = Left(2).map(x => x + 1).map(x => x / 2).fold(x => 'error', x => x);
// [S] 03

const result = findColor('red')
                  .map(c => c.slice(1))
                  .fold(
                    e => 'no color',
                    c => c.toUpperCase()
                  );

console.log(result);
