const Box = x => ({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(f(${x}))`
});

const moneyToFloat = str => parseFloat(str.replace(/\$/g, ''))

const percentToFloat = str => {
  const replaced = str.replace(/\%/, '');
  const number = parseFloat(replaced);
  return number * 0.01;
}

const applyDiscount = (price, discount) => {
  const cost = moneyToFloat(price);
  const saving = percentToFloat(discount);
  return cost - (cost * saving);
}

const result = applyDiscount('$5.00', '20%');

console.log(result);
