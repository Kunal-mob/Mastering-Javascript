function greet(age) {
    console.log(this.name + " is " + age + " years old.");
  }
  
  const user = { name: "Emma" };
  greet.apply(user, [25]); // Output: Emma is 25 years old ✅
  