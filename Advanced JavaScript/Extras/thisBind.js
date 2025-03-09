function greet() {
    console.log(this.name);
  }
  
  const user = { name: "Emma" };
  const boundFunc = greet.bind(user);
  boundFunc(); // Output: Emma ✅
  