document.getElementById("btn").addEventListener("click", function() {
    console.log(this); // Refers to the button element, but arrow function will refer to global object.
  });
  