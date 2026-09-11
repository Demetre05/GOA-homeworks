const container = document.getElementById("container");

const randomizer = () => {
    let randomColor = () => Math.floor(Math.random() * 256);
    return `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
};

let margin = 0;
document.addEventListener("keydown", () => {
    container.style.marginBottom = `${margin}px`;
    margin++;
});

document.addEventListener("keyup", () => {
    container.style.backgroundColor = randomizer();
    randomizer();
});