setInterval(() => {
    console.log("Hello World");
}, 1000);

let number = 0;

const interval = setInterval(() => {
    if(number !== 5) {
        number++;
        console.log(number);
    } else {clearInterval(interval)}
}, 1000);

let count = 0;

const interval1 = setInterval(() => {
    console.log("bla");
    count++;
    if(count === 10) {clearInterval(interval1)}
}, 1000);

// Web API - საჭირო არის კოდის სივრცეში აღმოჩენილი ასინქრონული ფუნქციებისთვის გაწერილი დროის(delay) ასათვლელად და შემდეგ callback queue-ში გადასაცემად.
// Web API-ზე კომპიუტერი იღებს წვდომას ბრაუზერის მეშვეობით.