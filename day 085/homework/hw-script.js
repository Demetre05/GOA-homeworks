//  შეგვიძლია მივწვდეთ ელემენტებს სხვადასხვა მეთოდებით, როგორიცაა:
// getElementById, getElementsByClassName, getElementsByTagName, querySelector, და querySelectorAll.
//  სტილების შეცვლა შესაძლებელია ელემენტის style თვისების გამოყენებით. მაგალითად:
// document.querySelector("#myParagraph").style.color = "red";


const par = document.querySelector("p")
par.textContent = "Hello World";
par.style.fontSize = "32px";
par.style.fontFamily = "roboto", "sans-serif";


const DIV = document.querySelector("div");
DIV.innerHTML = '<button id = "b1"></button>  <button id = "b2"></button>  <button id = "b3"></button>';

document.getElementById("b1").textContent = "Bla";
document.getElementById("b2").textContent = "Ble";
document.getElementById("b3").textContent = "Blo";

const btn = document.querySelectorAll("button");
btn.forEach(x => {
    x.style.fontSize = "24px";
    x.style.fontFamily = "roboto", "sans-serif";
    x.style.borderRadius = "15px";
    x.style.backgroundColor = "green";
});