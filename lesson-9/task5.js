
const users = [
    { name: 'John', age: 30, email: "john@example.com" },
    { name: 'Jane', age: 25, email: "jane@example.com" },
    { name: 'Doe', age: 35, email: "doe@example.com"}
];

for (const {name, age, email} of users) {
    console.log(`Name: ${name}, Age: ${age}, Email: ${email}`);
}