function outerFunc() {
  let count = 0;

  function countPlus() {
    count++;
    console.log("count : " + count);
  }
  return countPlus;
}

let counter = outerFunc();
counter();
counter();
counter();
counter();
