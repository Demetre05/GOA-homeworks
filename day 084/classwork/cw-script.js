// DOM (Document Object Model) - JS-ის ენაზე გადათარგმნილი HTML-ის დოკუმენტი, DOM-ის მეშვეობით საშუალება გვეძლევა HTML ვმართოთ JS-იდან.
// innerHTML - საშუალებას გვაძლევს ჩავაშენოთ სხვადასხვა ახალი თეგი მოცემულ თეგში
// textContent - საშუალებას გვაძლევს შევცვალოთ მოცემული თეგის მხოლოდ ტექსტი


const D = document.querySelector("div");
D.innerHTML = "<p>Hello</p><p>World</p>";

D.style.backgroundColor = "lightblue";
D.style.border = "2px solid black";
D.style.padding = "10px";
D.style.fontFamily = "Arial, sans-serif";

// მაგალითი textContent-ის გამოყენებაზე
const P = document.querySelector("p");
P.textContent = "This is a paragraph.";

// მაგალითი სხვადასხვა სელექტორების გამოყენებაზე
const allParagraphs = document.querySelectorAll("p");
allParagraphs.forEach((p) => {
  p.style.color = "orange";
  p.style.fontSize = "16px";
});

// მაგალითი id სელექტორის გამოყენებაზე
const myDiv = document.getElementById("myDiv");
myDiv.style.backgroundColor = "lightgreen";
myDiv.style.padding = "15px";

// მაგალითი class სელექტორის გამოყენებაზე
const myClassElements = document.getElementsByClassName("myClass");
myClassElements.forEach((el) => {
  el.style.backgroundColor = "lightcoral";
  el.style.border = "1px solid black";
});