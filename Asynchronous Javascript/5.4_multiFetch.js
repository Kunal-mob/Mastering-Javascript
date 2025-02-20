//^ This code is using both promises and async/await 
//its parellel
async function fetchMultiple() {
    let [user, posts] = await Promise.all([
      fetch("https://api.github.com/users/octocat").then(res => res.json()),
      fetch("https://jsonplaceholder.typicode.com/posts").then(res => res.json())
    ]);
    console.log(user, posts);
  }
  fetchMultiple();
  