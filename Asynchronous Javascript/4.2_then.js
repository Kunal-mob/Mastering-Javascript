//so, what is then() doing . it is basically handling the work after fetching data and also using data returned

let fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("data fetched !");
    }, 3000);
  });
};
fetchData().then((mssg) => {
  console.log(mssg);
});
