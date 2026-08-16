const cont = document.querySelector("#container");
const contId = document.querySelector("#container").id;
const contList = container.children;
const buttList = document.querySelectorAll("button");


cont.parentElement.style.backgroundColor = "beige";

for(let i = 0; i < contList.length; i++) {
    contList[i].className = "card";
    contList[i].id = "card" + (i + 1);
};

for(let i = 0; i < buttList.length; i++) {
    buttList[i].className = "butt";
    buttList[i].id = "butt" + (i + 1);
};


const addCard = (x) => {
    const newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.id = `card${contList.length + 1}`;
    newDiv.textContent = "ახალი ბარათი";
    newDiv.style.display = "linear";
    newDiv.style.backgroundColor = "yellow";
    return document.getElementById(x).appendChild(newDiv);
};

const changeCards = (x) => {
    for(let i = 0; i < x.length; i++) {
        x[i].style.backgroundColor = "green";
    }
};

const removeCard = (x) => x[x.length - 1].remove();