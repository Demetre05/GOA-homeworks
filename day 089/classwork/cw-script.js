document.body.innerHTML = `
    <div id="container"></div>
    <p>question 1 / 5</p>
    <p>score: 0</p>
    <button id="btn">Next</button>`;

const container = document.querySelector("#container");
const btn = document.querySelector("#btn");
const p1 = document.querySelectorAll("p")[0];
const p2 = document.querySelectorAll("p")[1];
let count = 1;
let point = 0;

const questionsList = [
    {
        header: "რა არის JavaScript?",
        btn1: "პროგრამირების ენა",
        btn2: "ოპერაციული სისტემა",
        btn3: "ბრაუზერი",
        btn4: "მონაცემთა ბაზა"
    },

    {
        header: "რა მონაცემთა ტიპია 'Hello World'?",
        btn1: "number",
        btn2: "boolean",
        btn3: "string",
        btn4: "object"
    },

    {
        header: "რომელი keyword-ი გამოიყენება მუდმივი ცვლადისთვის?",
        btn1: "var",
        btn2: "const",
        btn3: "let",
        btn4: "set"
    },
    
    {
        header: "როგორ აცხადებთ ფუნქციას?",
        btn1: "function myFunc()",
        btn2: "func myFunc()",
        btn3: "create myFunc()",
        btn4: "def myFunc()"
    },
    
    {
        header: "რომელია მასივის პირველი ინდექსი?",
        btn1: "-1",
        btn2: "1",
        btn3: "0",
        btn4: "first"
    }
];

const correctAnswers = {
    quest1: "პროგრამირების ენა",
    quest2: "string",
    quest3: "const",
    quest4: "function myFunc()",
    quest5: "0"
};

const questFact = (n) => {
    return container.innerHTML = `
    <h1>${questionsList[n].header}</h1>
    <div id="options">
        <button onclick="checkFunc(event)">${questionsList[n].btn1}</button>
        <button onclick="checkFunc(event)">${questionsList[n].btn2}</button>
        <button onclick="checkFunc(event)">${questionsList[n].btn3}</button>
        <button onclick="checkFunc(event)">${questionsList[n].btn4}</button>
    </div>`
};

questFact(count-1);

btn.addEventListener("click", () => {
    if(count < 5) {
        questFact(count);
        ++count;
    } else if(count === 5) {
        btn.addEventListener("click", () => {
            document.body.innerHTML = `
            <p style="font-size: 32px">Final Score: ${point}</p>`;
        });
    }
    p1.textContent = `question ${count} / 5`;    
});

const deleteOnclick = () => {
    for(let i = 0; i < container.children[1].children.length; i++) {
        container.children[1].children[i].onclick = "";
    }
};

const checkFunc = (e) => {
    if(e.target.innerHTML === correctAnswers[`quest${count}`]) {
        e.target.style.backgroundColor = "lightgreen";
        p2.textContent = `score: ${++point}`;
        deleteOnclick();
    } else {
        e.target.style.backgroundColor = "red";
        deleteOnclick();
    }
};