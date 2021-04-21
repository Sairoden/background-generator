const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
].reduce((accumulator, array) => {
  debugger;
  return [...accumulator, ...array];
}, []);

console.log(flattened);

