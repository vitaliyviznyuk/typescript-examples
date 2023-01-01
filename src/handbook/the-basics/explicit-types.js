function greet(person, date) {
    console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
// greet("Maddison", Date()); // Argument of type 'string' is not assignable to parameter of type 'Date'.
greet("Maddison", new Date());
