//spread operator use to expand!
let yourNum = [1, 2, 3];
let myNum = [...yourNum, 4, 5];
console.log(myNum);

let yourBag = {
  book: "physics",
  pen: "blue",
};

let myBag = {
  ...yourBag,
  bottle: "steel milton",
};
console.log(myBag);
