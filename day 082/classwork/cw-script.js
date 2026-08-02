const person = {
    name: "Demetre",
    surname: "Ghlonti",
    age: 16,
    height: 187,
    weight: 72
};

for(const i in person) {
    console.log(i);
};

for(const i in person) {
    console.log(person[i]);
};

for(const [key, value] of Object.entries(person)) {
    console.log(`Key: ${key}; Value: ${value}`);
};

const obj = {}

Object.assign(obj, person, {name: "Giorgi", age: 17});
console.log(obj);