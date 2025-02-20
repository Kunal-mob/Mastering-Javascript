// ✔ No .then() chaining
// ✔ More readable
//^ async functions always return a Promise, and await pauses execution until the Promise resolves.

async function fetchData() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    let data = await response.json();
    console.log("ook");
    
    console.log(data);
  } catch (error) {
   
    console.log("Error444:", error);
  }
}
fetchData();

  