
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
}

person.email = 'john@example.com';

delete person.age;

console.log(person);