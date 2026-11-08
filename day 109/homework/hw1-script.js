const main = document.querySelector("main");
const btn = document.getElementById("deleteAll");

let scores = JSON.parse(localStorage.getItem("scores"));

scores.forEach(s => {
    let txt = "";
    s.forEach(n => txt += n);
    main.innerHTML += `
    <div>
        <p>${txt}</p>
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
    scores.splice(scores.findIndex(s => e.target.parentElement.querySelector("p").textContent === s.join("")), 1);
    localStorage.setItem("scores", JSON.stringify(scores));
};