const p = document.querySelector("p");
const increase = document.querySelectorAll("button")[0];
const decrease = document.querySelectorAll("button")[1];

increase.addEventListener("click", () => {
    p.textContent = Number(p.textContent) + 1;
});

decrease.addEventListener("click", () => {
    p.textContent = Number(p.textContent) - 1;
});