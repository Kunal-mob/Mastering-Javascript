const person = { name: "Alice", age: 25 };

// ❌ Mutating the original object
person.age = 26;

// ✅ Creating a new object instead
const updatedPerson = { ...person, age: 26 };

console.log(updatedPerson); // { name: "Alice", age: 26 } ✅
console.log(person); // { name: "Alice", age: 25 } ✅ (original remains unchanged)
