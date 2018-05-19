// Simple Generic
function echo(data) {
    return data;
}
console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));
// Better Generic
function betterEcho(data) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho(27));
console.log(echo({ name: "Max", age: 27 }));
// Built-in Generics
var testResults = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);
