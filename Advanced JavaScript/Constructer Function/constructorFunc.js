//this help in automating the process of object creation

function person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function () {
    console.log("hello " + this.name);
  };
}

let p1 = new person("kunal",20)
let p2 = new person("mohit",24)

p1.greet()
p2.greet()