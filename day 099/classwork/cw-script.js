class Dog {
    constructor(name, age) {
        this._name = name;
        this._age = age;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    set name(newName) {
        this._name = newName;
    }

    set age(newAge) {
        this._age = newAge;
    }
};

const myDog = new Dog("Max", 3);

console.log(myDog.name);
console.log(myDog.age);

myDog.name = "Bob";
myDog.age = 4;

console.log(myDog.name);
console.log(myDog.age);


class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
};

class Cat extends Animal {
    constructor(type, sound, color, isLazy) {
        super(type, sound);
        this.color = color;
        this.isLazy = isLazy;
    }
};

class Bird extends Animal {
    constructor(type, sound, featherColor, canFly) {
        super(type, sound);
        this.featherColor = featherColor;
        this.canFly = canFly;
    }
};

const animal = new Animal("lion", "roar");
const myCat = new Cat("mammal", "meow", "white", true);
const myBird = new Bird("bird", "chirp", "yellow", true);

console.log(animal);
console.log(myCat);
console.log(myBird);