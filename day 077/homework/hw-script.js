const fruits = ["Apple", "Banana", "Orange"];

fruits.forEach(i => console.log(i));


const numbers = [5, 10, 15];

let sum = 0;
numbers.forEach(n => sum += n);
console.log(sum);


const numbers1 = [2, 4, 6];

const doubledNumbers = numbers1.map(n => n*2);
console.log(doubledNumbers);


const names = ["nika", "ana", "luka"];

const upperNames = names.map(name => name.toUpperCase());
console.log(upperNames);


const ages = [18, 20, 25];

const olderAges = ages.map(n => n += 1);
console.log(olderAges);