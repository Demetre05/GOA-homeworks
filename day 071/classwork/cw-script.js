// 1) Hoisting - JavaScript-ის მექანიზმი, რომელიც საშუალებას აძლევს ფუნქციებს და ცვლადებს
// წინასწარ გამოცხადებულად ჩაითვალოს, მიუხედავად იმისა, თუ სად არის ისინი კოდში დაწერილი.

// მაგალითი ფუნქციაზე:
console.log(greet());

function greet() {
    return "Hello, World!";
}


let myList = ["Apple", "Banana", "Cherry", "Date", "Mango"];

myList.push("Orange");
myList[6] = "Grape";

myList[3] = "Strawberry";
myList[5] = "Pineapple";

console.log(myList[0], myList[1], myList[4]);
console.log(myList);