function greet(person) {
    console.log("Hello, " + person.firstName);
}
function changeName(person) {
    person.firstName = "Anna";
}
var person = {
    name: "Max",
    age: 27
};
greet(person);
changeName(person);
greet(person);
