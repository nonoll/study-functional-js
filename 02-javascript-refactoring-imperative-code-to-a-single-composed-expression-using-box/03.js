const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(f(${x}))`
});

// [S] 01
  // const moneyToFloat = str => parseFloat(str.replace(/\$/g, ''))
// [E] 01

// [S] 02
  // const moneyToFloat = str => 
  //   Box(str)
  //     .map(s => s.replace(/\$/g, ''))
  //     .fold(r => parseFloat(r));
// [S] 02

const moneyToFloat = str => 
  Box(str)
    .map(s => s.replace(/\$/g, ''))
    .map(r => parseFloat(r));

// [S] 01
  // const percentToFloat = str => {
  //   const replaced = str.replace(/\%/, '');
  //   const number = parseFloat(replaced);
  //   return number * 0.01;
  // }
// [E] 01

// [S] 02
  // const percentToFloat = str => 
  //   Box(str.replace(/\%/, ''))
  //     .map(replaced => parseFloat(replaced))
  //     .fold(number => number * 0.01);
// [E] 02

const percentToFloat = str => 
  Box(str.replace(/\%/, ''))
    .map(replaced => parseFloat(replaced))
    .map(number => number * 0.01);

// [S] 01
  // const applyDiscount = (price, discount) => {
  //   const cost = moneyToFloat(price);
  //   const saving = percentToFloat(discount);
  //   return cost - (cost * saving);
  // }
// [E] 01

const applyDiscount = (price, discount) => 
  moneyToFloat(price)
    .map(cost => 
      percentToFloat(discount)
        .map(saving => cost - (saving * cost))
    )

const result = applyDiscount('$5.00', '20%');

console.log(result);
