const form = document.querySelector("form");
const guess = document.querySelector("#btn1");
const restart = document.querySelector("#btn2");
let answer = document.querySelector("h3");
let attempts = document.querySelector("b");
let attemptNum = Number(attempts.textContent);
let ranNum = Math.floor(Math.random() * 100) + 1;

guess.addEventListener("click", (e) => {
    e.preventDefault();
    if(Number(form.num.value) > 100 || Number(form.num.value) < 1) {
        answer.textContent = "number must be from 1 to 100!";
    } else if(Number(form.num.value) === ranNum && attemptNum > 0 && answer.textContent !== "Correct!") {
        answer.textContent = "Correct!";
    } else if(Number(form.num.value) !== ranNum && attemptNum > 0 && answer.textContent !== "Correct!") {
        Number(form.num.value) > ranNum ? answer.textContent = "Too high!" : answer.textContent = "Too low!";
        attemptNum--;
        attempts.textContent = attemptNum;
    } else if(attemptNum === 0) {answer.textContent = "No attempts left!"}
    form.num.value = "";
});

restart.addEventListener("click", () => {
    attempts.textContent = "5";
    attemptNum = Number(attempts.textContent);
    ranNum = Math.floor(Math.random() * 100) + 1;
    answer.textContent = "";
    form.num.value = "";
});