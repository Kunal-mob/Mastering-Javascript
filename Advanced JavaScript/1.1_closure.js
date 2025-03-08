//They allow functions to remember variables even after they return.
//Used in data encapsulation (hiding variables from the global scope).
//Essential for callback functions and event handlers.

function outerFunc() {
  let data = "Hello, i'm from outer Function";

  function innerFunc() {
    console.log(data);
  }
  return innerFunc;
}

let showData = outerFunc()
showData()