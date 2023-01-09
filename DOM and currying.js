// Noncurried version//
const add = (a, b, c) => {
  return a + b + c;
};
console.log(add(2, 3, 5)); // 10

// Curried version//
const addCurry = (a) => {
  return (b) => {
    return (c) => {
      return a + b + c;
    };
  };
};
console.log(addCurry(2)(3)(5)); // 10
