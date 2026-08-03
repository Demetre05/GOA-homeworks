// ობიექტის კონსტრუქტორი ფუნქცია - მსგავსი სტრუქტურის მქონე ობიექტების შემქმნელი ქარხანა

function Student(name, surname, age, grades) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.grades = grades;
};

const student1 = new Student("Demetre", "Ghlonti", 16, 10);
console.log(student1);

// this keyword - მიუთითებს იმ ობიექტს, რომელშიც თავად არის ჩასმული
// new keyword - ამ შემთხვევაში გამოიყენება ახალი ობიექტების შემოსაღებად