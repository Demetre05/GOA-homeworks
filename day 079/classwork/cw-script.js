const me = {
    name: "Demetre",
    surname: "Ghlonti",
    age: 16
};

console.log(me);
console.log(me.name, me.surname, me.age);
delete me.age;
console.log(me);



const user = {
    name: "Nika",
    age: 20,
    city: "Tbilisi",
    isStudent: true
};

console.log(user.name);
console.log(user.age);
console.log(user.city);
console.log(user.isStudent);

user.city = "New York";
user.phone = "Nokia";
delete isStudent;


const product = {
    name: "carrot",
    category: "vegetable",
    price: 3,
    inStock: "idk"
};

product.price = 5;
product.discount = "30%";
product.finalPrice = 3.5;

console.log(product);


const movie = {
    title: "Revenant",
    director: "ar maxsovs",
    year: 2015,
    rating: 8
};

movie.rating = 10;
movie.genre = "thriller";
console.log(movie.year > 2020);
console.log(movie.title, movie.director);


const student = {
    name: "Giorgi",
    age: 16,
    school: "School N142",
    grades: [8, 9, 10]
};

student.grades.push(100);
student.age++;
student.average = 9;

console.log(student);


const employee = {
    firstName: "Luka",
    lastName: "Yvelashvili",
    posiiton: "Librarian",
    salary: 3000,
    skills: ["clever", "fast"]
};

employee.skills.push("strong");
employee.salary = 4000;
employee.fullName = employee.firstName + " " + employee.lastName;
delete employee.posiiton;

console.log(employee);