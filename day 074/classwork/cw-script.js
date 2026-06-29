for (let i = 1; i <= 50; i++) {
    console.log(i);
}

for (let i = 100; i > 1; i--) {
    console.log(i);
}

const fruits = ["Apple", "Banana", "Orange", "Mango", "Kiwi"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

for (let i = 2; i < 100; i += 2) {
    console.log(i);
}

const numbers = [12, 7, 25, 40, 3, 18, 9];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

console.log(sum);