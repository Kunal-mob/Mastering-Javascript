//Classes are just a cleaner way to write constructor functions!
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    greet() {
      console.log(`Hello, my name is ${this.name}`);
    }
  }
  
  const person1 = new Person("Alice", 25);
  const person2 = new Person("Bob", 30);
  
  person1.greet(); // Hello, my name is Alice ✅
  person2.greet(); // Hello, my name is Bob ✅
  