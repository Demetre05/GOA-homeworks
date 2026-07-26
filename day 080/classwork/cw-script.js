const student = {
  name: "Nika",
  age: 16,
  grade: 10,
  school: "Future Academy"
};


for(let i in student) {
    console.log(i, student[i]);
};

student.city = "Tbilisi";

student.grade = 100;



const products = {
  apple: 3,
  banana: 5,
  orange: 2,
  kiwi: 7
};


for(let i in products) {
    console.log(i, products[i]);
};

let sum = 0;
for(let i in products) {
    sum += products[i];
};
console.log(sum);

for(let i in products) {
    if(products[i] > 4) {
        console.log(products[i]);
    }
};



const animals = [
  { name: "Lion", age: 8 },
  { name: "Tiger", age: 5 },
  { name: "Elephant", age: 12 }
];


for(const i of animals) {
  console.log(`${i.name} - ${i.age}`);
};

for(const i of animals) {
  if(i.age > 6) {
    console.log(i.name);
  }
};



const players = [
  { name: "Luka", goals: 12 },
  { name: "Saba", goals: 7 },
  { name: "Gio", goals: 15 }
];


let totalGoals = 0;
for(const i of players) {
  totalGoals += i.goals;
};
console.log(totalGoals);

let topScorer = players[0];
for(const i of players) {
  if(i.goals > topScorer.goals) {
    topScorer = i;
  }
};
console.log(topScorer.name);



const books = [
  { title: "Harry Potter", pages: 350 },
  { title: "The Hobbit", pages: 295 },
  { title: "1984", pages: 328 }
];


for(const i of books) {
  console.log(i.title);
};

let thickestBook = books[0];
for(const i of books) {
  if(i.pages > thickestBook.pages) {
    thickestBook = i;
  }
};
console.log(thickestBook.title);

let totalPages = 0;
for(const i of books) {
  totalPages += i.pages;
};
console.log(totalPages);