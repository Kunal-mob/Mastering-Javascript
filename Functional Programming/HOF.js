//^ Higher Order Function
/*Takes a function as an argument
Returns a function*/

const perform = (a, b, operation) => {
  console.log(operation(a, b));
};

function add(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}

perform(5,6,add)
perform(51,6,sub)