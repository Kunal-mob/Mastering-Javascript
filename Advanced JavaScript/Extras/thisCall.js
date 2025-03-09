function greet() {
    console.log(this.name);
  }
  
  const user = { name: "Emma" };
  greet.call(user); // Output: Emma ✅
  