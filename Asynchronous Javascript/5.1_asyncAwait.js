//& Basic Example !

let fetchData = () => {
 return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fetching complete...");
    }, 2000);
  });
};

let callFetch = async () => {
  let result = await fetchData();
  console.log(result);
};
callFetch();
