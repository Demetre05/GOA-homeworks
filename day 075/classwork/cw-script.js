const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}
console.log(sum);


const numbers2 = [10, 5, 8, 20, 15];
let max = numbers2[0];
for (let i = 1; i < numbers2.length; i++) {
  if (numbers2[i] > max) {
    max = numbers2[i];
  }
}
console.log(max);


const numbers3 = [1, 2, 3, 4, 5, 6];
let evenCount = 0;
let index = 0;
while (index < numbers3.length) {
  if (numbers3[index] % 2 === 0) {
    evenCount++;
  }
  index++;
}
console.log(evenCount);


do {
  let input = parseInt(prompt("შეიყვანეთ რიცხვი (შეწყდება 0-ის შეყვანისას): "));
  if (input === 0) {
    break;
  }
} while (true);


const names = ["Alice", "Bob", "Charlie", "David"];
let nameToFind = prompt("შეიყვანეთ სახელი: ");
let found = false;
for (let i = 0; i < names.length; i++) {
  if (names[i] === nameToFind) {
    found = true;
    break;
  }
}
if (found) {
  console.log("სახელი მოძებნილია.");
} else {
  console.log("სახელი არ არის მოძებნილი.");
}


let password = prompt("შეიყვანეთ პაროლი: ");
while (password !== "secret") {
  password = prompt("შეიყვანეთ პაროლი: ");
}
console.log("პაროლი სწორია.");


const array = [1, 2, 3, 4, 5];
let reverseIndex = array.length - 1;
while (reverseIndex >= 0) {
  console.log(array[reverseIndex]);
  reverseIndex--;
}


const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];
for (let i = 0; i < array1.length; i++) {
  for (let x = 0; x < array2.length; x++) {
    if (array1[i] === array2[x]) {
      console.log(array1[i]);
    }
  }
}


for (let i = 1; i <= 10; i++) {
  let row = "";
  for (let x = 1; x <= 10; x++) {
    row += (i * x) + " ";
  }
  console.log(row);
}


const grades = [85, 90, 78, 92, 88];
let total = 0;
for (let i = 0; i < grades.length; i++) {
  total += grades[i];
}
let average = total / grades.length;
console.log(average);