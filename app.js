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
// Arrays
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["Apple", "Banana"]);
// Generic Types
var echo2 = betterEcho;
console.log(echo2("Something"));
// Generic Class
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());
// Module Exercise
var Entry = /** @class */ (function () {
    function Entry(key, value) {
        this.key = key;
        this.value = value;
    }
    return Entry;
}());
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.entries = [];
    }
    MyMap.prototype.setItem = function (key, value) {
        this.entries = this.entries.filter(function (entry) { return entry.key !== key; }).concat({ key: key, value: value });
    };
    MyMap.prototype.getItem = function (key) {
        return this.entries.filter(function (entry) { return entry.key === key; })[0].value;
    };
    MyMap.prototype.clear = function () {
        this.entries = [];
    };
    MyMap.prototype.printMap = function () {
        console.log('{');
        this.entries.forEach(function (entry) { return console.log('   ', entry.key, ': ', entry.value); });
        console.log('}');
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.setItem('apples', 20);
numberMap.printMap();
console.log(numberMap.getItem('apples'));
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.setItem('name', "Anna");
stringMap.printMap();
console.log(stringMap.getItem('age'));
stringMap.clear();
stringMap.printMap();
