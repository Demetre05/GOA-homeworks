let number = Number(prompt("Enter the first number: "));

let promise = new Promise((resolve, reject) => {
    if(number > 0) {
        resolve("Positive");
    } else if(number === 0) {
        resolve("Zero");
    } else if(number < 0) {
        reject("Negative");
    } else {
        reject("Input is not a number!")
    }
});

promise.then(() => {
    console.log("The first entered number is positive");
}).catch(() => {
    console.log("The first entered number is negative");
}).finally(() => {
    console.log("promise is completed");
});

console.log(promise);


let input = Number(prompt("Enter the second number: "));

let promise1 = new Promise((resolve, reject) => {
    if(input === 1234) {
        resolve(1234);
    } else {
        reject("not 1234");
    }
});

promise1.then(() => {
    console.log("The second entered number equals 1234");
}).catch(() => {
    console.log("The second entered number doesn't equal 1234");
});

console.log(promise1);