//exaple of a non-blocking code
//time-out func have own thread.
console.log("Start");
setTimeout(() => {
  console.log("Data fetched after 2 second");
}, 2000);
console.log("end");
