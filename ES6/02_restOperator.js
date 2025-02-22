//(...) rest operator is used to collect data!
function sum(...num) {
  let result;
  return num.reduce((acc, val) => acc + val, 0);
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));
