//A Promise represents a value that will be available in the future.
/*  1️⃣ Pending → Initial state
    2️⃣ Resolved (Fulfilled) → Task completed
    3️⃣ Rejected → Task failed */

let fetchData = () => {
  return new Promise((resolve, reject) => {
    let success = false;
    setTimeout(() => {
      console.log("Data is fetched!");
       if (success) {
      resolve("done");
    } else {
      reject("not done");
    }
    }, 3000);
   
  });
};
fetchData()
  .then((mssg) => {
    console.log(mssg);
  })
  .catch((e) => console.log(e));
