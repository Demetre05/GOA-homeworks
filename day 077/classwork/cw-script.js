const numbers = [12, 7, 25, 18, 3, 40];

numbers.forEach(num => {
    if (num % 2 === 0) {
        console.log(`${num} არის ლუწი`)
    } else {
        console.log(`${num} არის კენტი`)
    }
});


const words = ["JavaScript", "HTML", "CSS", "React"];

words.forEach(word => {
    console.log(`${word} - ${word.length}`)
});


const numbers1 = [5, 12, 8, 20, 15];

const newNumbers = numbers1.map(num => {
    if (num % 2 === 0) {
        return num / 2
    }
    return num * 3
});
console.log(newNumbers);


const words1 = ["apple", "banana", "kiwi", "orange"];

const upperWords = words1.map(word => {
    return `${word.toUpperCase()} (${word.length})`
});
console.log(upperWords);


const numbers2 = [14, 7, 22, 35, 18, 41, 50];

const anotherNumbers = numbers2.filter(num => num % 2 === 0 && num < 20);
console.log(anotherNumbers);


const words2 = [
  "computer",
  "cat",
  "banana",
  "sun",
  "javascript",
  "pen"
];

const newWords = words2.filter(word => word.length >= 5 && word.length <= 10);
console.log(newWords);


const numbers3 = [4, 12, 15, 18, 27, 30];

const index = numbers3.findIndex(num => num % 2 !== 0 && num > 20);
console.log(index);


const words3 = ["HTML", "CSS", "React", "JavaScript", "Node"];

const foundWord = words3.findIndex(word => word.length > 6);
console.log(foundWord);


const numbers4 = [3, 10, 15, 22, 27, 40, 55, 60];

const filteredNumbers = numbers4.filter(num => num > 10 && num % 2 !== 0);
const squaredNumbers = filteredNumbers.map(num => num * num);
squaredNumbers.forEach(num => console.log(num));


const numbers5 = [5, 14, 21, 32, 45, 58, 63, 70, 81];

const filteredNums = numbers5.filter(num => num % 3 === 0 || num % 5 === 0);
const mappedNums = filteredNums.map(num => {
    if (num % 2 === 0) {
        return num / 2;
    }
    return num * 2;
});
const indexedNum = mappedNums.findIndex(num => num > 50);
mappedNums.forEach(num => console.log(`ელემენტი #1: ${num}`));
console.log(`პირველი 50-ზე დიდი ელემენტის ინდექსია: ${indexedNum}`);