let fetchData = (callback) => {
  setTimeout(() => {
    console.log("Data Fetched !");
    callback();
  }, 3000);
};

fetchData(() => {
  console.log("Loading Data...");
});

