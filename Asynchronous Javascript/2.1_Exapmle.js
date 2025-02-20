/* ✔ Call Stack → Keeps track of function calls.
   ✔ Web APIs → Handle async tasks (setTimeout, fetch, DOM events).
   ✔ Callback Queue → Stores tasks waiting for execution.
   ✔ Event Loop → Moves completed async tasks from the queue to the call stack.*/

console.log("A, Start");
setTimeout(() => {
  //& because it is handled by web api, it will go in queue to wait 0sec.
  console.log("B, Data fetched");
}, 0);
console.log("C, End");
