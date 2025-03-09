let obj1 = {
  name: "kunal",
  age: 16,
  greet: function () {
    console.log(this.name);
  },
};
obj1.greet();
let obj2 = {
  name: "kunal",
  age: 16,
  greet: ()=> {
    console.log(this.name);
  },
};
obj2.greet();
