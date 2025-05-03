{

// ternary operator
// optional chaining
// nullish coalescing operator

const age: number = 15;
if (age > 18) {
    console.log("You are an adult");
}
else {
    console.log("You are a minor");
}

// ternary operator
const isAdult = age > 18 ? "You are an adult" : "You are a minor"; // ternary operator
console.log(isAdult);


// nullish coalescing operator ( null or undefined)
const isAuthenticated = null; // nullish coalescing operator
const result = isAuthenticated ?? "Guest"; // nullish coalescing operator
console.log(result); // Guest


// optional chaining operator (?.)
const user = {
    name: {
        firstName: "Ashik",
        lastName: "Sakib",
    },
    age: 23,
}

const midddleName = user?.name?.midddleNam ?? "No middle name"; // optional chaining operator
console.log(midddleName); // No middle name

















}