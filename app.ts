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
console.log(betterEcho<number>(27));
console.log(echo({name: "Max", age: 27}));

// Built-in Generics
const testResults: Array<number> = [1.94, 2.33];
testResults.push(-2.99);
console.log(testResults);

// Arrays
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll<string>(["Apple", "Banana"]);

// Generic Types
const echo2: <T>(data: T) => T = betterEcho;

console.log(echo2<string>("Something"));

// Generic Class
class SimpleMath<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}

const simpleMath = new SimpleMath<string, number>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 20;
console.log(simpleMath.calculate());



// Module Exercise
class Entry<T> {
    constructor(public readonly key: string, public value: T) {}
}

class MyMap<T> {
    private entries: Array<{ readonly key: string, readonly value: T }> = [];

    setItem(key: string, value: T) {
        this.entries = this.entries.filter(entry => entry.key !== key).concat({ key, value });
    }

    getItem(key: string) {
        return this.entries.filter(entry => entry.key === key)[0].value;
    }

    clear() {
        this.entries = [];
    }

    printMap() {
        console.log('{');
        this.entries.forEach(entry => console.log('   ', entry.key, ': ', entry.value));
        console.log('}');
    }
}

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.setItem('apples', 20);
numberMap.printMap();
console.log(numberMap.getItem('apples'));

const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.setItem('name', "Anna");
stringMap.printMap();
console.log(stringMap.getItem('age'));
stringMap.clear();
stringMap.printMap();