// Simple Generic
function echo(data: any) {
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({name: "Max", age: 27}));

// Better Generic
function betterEcho<T>(data: T) {
    return data;
}

console.log(betterEcho("Max").length);
console.log(betterEcho<number>("27"));
console.log(echo({name: "Max", age: 27}));