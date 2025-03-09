function person(name, age) {
    this.name = name;
    this.age = age;
  }
  
  person.prototype.greet=function () {
    console.log("hello dear " + this.name);//^ increase efficiency!
  }
  let p1 = new person("kunal",20)
  let p2 = new person("mohit",24)
  
  p1.greet()
  p2.greet()