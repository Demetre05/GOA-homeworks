document.body.innerHTML = `
    <div id="container"></div>
    <p>question 1 / 5</p>
    <p>score: 0</p>
    <button id="btn">next</button>`;

const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const p1 = document.querySelectorAll("p")[0];
const p2 = document.querySelectorAll("p")[1];

const questionsList = [
    `<h1>რა არის JavaScript?</h1>
    <div id="options">
        <button>პროგრამირების ენა</button>
        <button>ოპერაციული სისტემა</button>
        <button>ბრაუზერი</button>
        <button>მონაცემთა ბაზა</button>
    </div>`,

    `<h1>რა მონაცემთა ტიპია "Hello World"?</h1>
    <div id="options">
        <button>number</button>
        <button>boolean</button>
        <button>string</button>
        <button>object</button>
    </div>`,

    `<h1>რომელი keyword-ი გამოიყენება მუდმივი ცვლადისთვის</h1>
    <div id="options">
        <button>var</button>
        <button>const</button>
        <button>let</button>
        <button>set</button>
    </div>`,

    `<h1>როგორ აცხადებთ ფუნქციას?</h1>
    <div id="options">
        <button>function myFunc()</button>
        <button>func myFunc()</button>
        <button>create myFunc()</button>
        <button>def myFunc()</button>
    </div>`,

    `<h1>რომელია მასივის პირველი ინდექსი?</h1>
    <div id="options">
        <button>-1</button>
        <button>1</button>
        <button>0</button>
        <button>first</button>
    </div>`
];

const correctAnswers = [
    `<button>პროგრამირების ენა</button>`,
    `<button>string</button>`,
    `<button>const</button>`,
    `<button>function myFunc()</button>`,
    `<button>0</button>`
];

container.innerHTML = questionsList[0];

btn.addEventListener("click", () => {
    const ind = questionsList.findIndex(i => {
        return i === container.innerHTML;
    });
    container.innerHTML = questionsList[ind + 1];
    p1.innerHTML = `question ${ind + 2} / 5`;
});

const options = document.getElementById("options").children;
const optionsList = [];
for(let i = 0; i < options.length; i++) {
    optionsList.push(options[i]);
};

optionsList.forEach(i => {
    i.addEventListener("click", () => {
        if(correctAnswers.includes(i)) {
            i.style.backgroundColor = "lightgreen";
        } else {
            i.style.backgroundColor = "red";
        }
    })
});