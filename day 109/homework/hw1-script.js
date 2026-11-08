const main = document.querySelector("main");
const btn = document.getElementById("deleteAll");

let scores = JSON.parse(localStorage.getItem("scores"));

scores.forEach(s => {
    let txt = "";
    s[0].forEach(n => txt += n);
    main.innerHTML += `
    <div>
        <b>${txt ? txt : "0"}</b>
        <p>${s[1]}</p>
        <button class="btns" onclick="deleteScore(event)">Delete</button>
    </div>`;
});

btn.addEventListener("click", () => {
    main.innerHTML = "";
    scores = [];
    localStorage.setItem("scores", JSON.stringify(scores));
});

const deleteScore = e => {
    e.target.parentElement.remove();
    scores.splice(scores.findIndex(s => e.target.parentElement.querySelector("b").textContent === s[0].join("")), 1);
    localStorage.setItem("scores", JSON.stringify(scores));
};