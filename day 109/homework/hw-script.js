const main = document.querySelector("main");

let questions = JSON.parse(localStorage.getItem("questions"));
let scores = JSON.parse(localStorage.getItem("scores"));
let i = questions.findIndex(q => q.isAnswered === false);
let answersList = [questions[i].a1, questions[i].a2, questions[i].a3, questions[i].a4];

const renderQuestion = () => {
    if(i < 10) {
        main.innerHTML = `
        <h1>${questions[i].title}</h1>
        <button onclick="check(event)">${questions[i].a1[0]}</button>
        <button onclick="check(event)">${questions[i].a2[0]}</button>
        <button onclick="check(event)">${questions[i].a3[0]}</button>
        <button onclick="check(event)">${questions[i].a4[0]}</button>
        <button onclick="next()" id="next">Next</button>`;
    } else {
        main.innerHTML = `
        <h1>Score: <b>${questions[i].answeredQuestions.length}</b></h1>
        <button onclick="reset()">Restart</button>`;
    }
};
renderQuestion();

let check = e => {
    let correctAnswer = answersList.findIndex(a => a[1]);
    if(questions[i].isAnswered === false) {
        if(e.target.textContent === answersList[correctAnswer][0]) {
            e.target.style.border = "3px solid green";
            questions[10].answeredQuestions.push(i+1);
            localStorage.setItem("questions", JSON.stringify(questions));
        } else {
            e.target.style.border = "3px solid red";
            let currentMain = main.querySelectorAll("button");
            currentMain[correctAnswer].style.border = "3px solid green";
        }
        questions[i].isAnswered = true;
        localStorage.setItem("questions", JSON.stringify(questions))}
};

const next = () => {
    if(questions[i].isAnswered === true) {
        i = questions.findIndex(q => q.isAnswered === false);
        answersList = [questions[i].a1, questions[i].a2, questions[i].a3, questions[i].a4]};
    renderQuestion();
};

const reset = () => {
    let d = new Date(Date.now()).toLocaleString();
    scores.push([questions[10].answeredQuestions, d]);
    scores.splice(0, scores.length - 5);
    localStorage.setItem("scores", JSON.stringify(scores));
    questions[10].answeredQuestions = [];
    questions.forEach(q => q.isAnswered = false);
    localStorage.setItem("questions", JSON.stringify(questions));
    i = questions.findIndex(q => q.isAnswered === false);
    answersList = [questions[i].a1, questions[i].a2, questions[i].a3, questions[i].a4];
    renderQuestion();
};

// const questionsList = [
//     {
//         title: "1. Which keyword declares a variable that can't be reassigned?",
//         a1: ["A) let", false],
//         a2: ["B) var", false],
//         a3: ["C) const", true],
//         a4: ["D) static", false],
//         isAnswered: false
//     },
//     {
//         title: "2. What does typeof 'hello' return?",
//         a1: ["A) 'text'", false],
//         a2: ["B) 'string'", true],
//         a3: ["C) 'char'", false],
//         a4: ["D) 'word'", false],
//         isAnswered: false
//     },
//     {
//         title: "3. What is the result of 2 + '2'?",
//         a1: ["A) 4", false],
//         a2: ["B) NaN", false],
//         a3: ["C) '22'", true],
//         a4: ["D) undefined", false],
//         isAnswered: false
//     },
//     {
//         title: "4. Which method adds an element to the end of an array?",
//         a1: ["A) pop()", false],
//         a2: ["B) shift()", false],
//         a3: ["C) unshift()", false],
//         a4: ["D) push()", true],
//         isAnswered: false
//     },
//     {
//         title: "5. Which command prints output to the browser console?",
//         a1: ["A) console.log()", true],
//         a2: ["B) print()", false],
//         a3: ["C) echo()", false],
//         a4: ["D) document.write.console()", false],
//         isAnswered: false
//     },
//     {
//         title: "6. Which operator compares both value and type?",
//         a1: ["A) =", false],
//         a2: ["B) ==", false],
//         a3: ["C) !=", false],
//         a4: ["D) ===", true],
//         isAnswered: false
//     },
//     {
//         title: "7. What does [10, 20, 30].length return?",
//         a1: ["A) 2", false],
//         a2: ["B) 3", true],
//         a3: ["C) 30", false],
//         a4: ["D) 4", false],
//         isAnswered: false
//     },
//     {
//         title: "8. Which method finds an HTML element by its id?",
//         a1: ["A) document.getElementById()", true],
//         a2: ["B) document.findId()", false],
//         a3: ["C) document.selectById()", false],
//         a4: ["D) document.getId()", false],
//         isAnswered: false
//     },
//     {
//         title: "9. Which is a valid function declaration?",
//         a1: ["A) function = myFunc() {}", false],
//         a2: ["B) def myFunc() {}", false],
//         a3: ["C) func myFunc() {}", false],
//         a4: ["D) function myFunc() {}", true],
//         isAnswered: false
//     },
//     {
//         title: "10. How many times does this loop run: for (let i = 0; i < 3; i++) { ... }?",
//         a1: ["A) 2 times", false],
//         a2: ["B) 3 times", true],
//         a3: ["C) 4 times", false],
//         a4: ["D) Infinitely", false],
//         isAnswered: false
//     },
//     {
//         answeredQuestions: [],
//         isAnswered: false
//     }
// ];
// localStorage.setItem("questions", JSON.stringify(questionsList));
// localStorage.setItem("scores", JSON.stringify([]));