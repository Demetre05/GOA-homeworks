const container = document.querySelector("#container");

const questionsList = [
    `<h1>რა არის JavaScript?</h1>
    <div id="options">
        <p>[ პროგრამირების ენა ]</p>
        <p>[ ოპერაციული სისტემა ]</p>
        <p>[ ბრაუზერი ]</p>
        <p>[ მონაცემთა ბაზა ]</p>
    </div>`,

    `<h1>რა მონაცემთა ტიპია "Hello World"?</h1>
    <div id="options">
        <p>number</p>
        <p>boolean</p>
        <p>string</p>
        <p>object</p>
    </div>`,

    `<h1>რომელი გამოიყენება მუდმივი ცვლადისთვის</h1>
    <div id="options">
        <p>var</p>
        <p>const</p>
        <p>let</p>
        <p>set</p>
    </div>`,

    `<h1>როგორ აცხადებთ ფუნქციას?</h1>
    <div id="options">
        <p>function myFunc()</p>
        <p>func myFunc()</p>
        <p>create myFunc()</p>
        <p>def myFunc()</p>
    </div>`,

    `<h1>რომელია მასივის პირველი ინდექსი?</h1>
    <div id="options">
        <p>-1</p>
        <p>1</p>
        <p>0</p>
        <p>first</p>
    </div>`
];

container.innerHTML = questionsList[0];