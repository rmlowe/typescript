// Exercise 1
// function Car(name) {
//     this.name = name;
//     this.acceleration = 0;
//
//     this.honk = function() {
//         console.log("Toooooooooot!");
//     };
//
//     this.accelerate = function(speed) {
//         this.acceleration = this.acceleration + speed;
//     }
// }
class Car {
    acceleration = 0;

    constructor(public name: string) {}

    honk() {
        console.log("Toooooooooot!");
    }

    accelerate(speed: number) {
        this.acceleration += speed;
    }
}
// var car = new Car("BMW");
const car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2
// var baseObject = {
//     width: 0,
//     length: 0
// };
class Shape {
    width = 0;
    length = 0;
}
class Rectangle extends Shape {
    width = 5;
    length = 2;
    calcSize() {
        return this.width * this.length;
    }
}
const rectangle = new Rectangle();
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
console.log(rectangle.calcSize());

// Exercise 3
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
class Person {
    _firstName = "";

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    }
}
const person = new Person();
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);
