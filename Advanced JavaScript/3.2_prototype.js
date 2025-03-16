const person = {
  greet() {
    console.log("hello");
  },
};
const p1 = Object.create(person);
p1.name = "john";

console.log(p1.name);
p1.greet();
