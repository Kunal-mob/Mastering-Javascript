let fetchData = () => {
    return new Promise((resolve,reject) => {
      setTimeout(() => {
        reject("data not fetched !");
      }, 2000);
    });
  };
  fetchData().then((mssg) => {
    console.log(mssg);
  }).catch(e=>console.log(e)
  );