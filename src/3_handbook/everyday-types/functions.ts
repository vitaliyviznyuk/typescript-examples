// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// Would be a runtime error if executed!
greet(42); // Argument of type 'number' is not assignable to parameter of type 'string'.

function getFavoriteNumber(): number {
    return 26;
}

// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for function
names.forEach(function (s) {
    console.log(s.toUppercase()); // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});

// Contextual typing also applies to arrow functions
names.forEach((s) => {
    console.log(s.toUppercase()); // Property 'toUppercase' does not exist on type 'string'. Did you mean 'toUpperCase'?
});
