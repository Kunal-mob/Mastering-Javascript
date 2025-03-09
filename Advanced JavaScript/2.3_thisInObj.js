let obj = {
  name: "kunal",
  age: 16,
  greet: function () {
    console.log(this.name);//obj
  }
};

obj.greet()