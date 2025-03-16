//inherit a function

function person(name) {
  this.name = name;
}

person.prototype.greet = function () {
  console.log("hello, mr." + this.name);
};

p1 = new person("Sunio")
p2 = new person("Jian")

p1.greet()
p2.greet()