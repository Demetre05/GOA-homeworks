// ჯავასკრიპტში კლასები გამოიყენება როგორც ობიექტების ერთგვარი შაბლონები. ვიყენებთ, როდესაც გვჭირდება შევქმნათ მსგავსი
// სტრუქტურის მქონე ბევრი ობიექტი ისე, რომ კოდის განმეორებას თავი ავარიდოთ, რადგან კოდის დუბლირება ცუდი პრაქტიკაა.

class Student {
    constructor(name, age, grade) {
        this._name = name;
        this._age = age;
        this._grade = grade;
    }

    studentInfo() {
        return `My name is ${this._name}, I'm ${this._age} years old and my grade is ${this._grade}`;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get grade() {
        return this._grade;
    }

    set name(newName) {
        this._name = newName;
    }

    set age(newAge) {
        this._age = newAge;
    }

    set grade(newGrade) {
        this._grade = newGrade;
    }
};

class highSchoolStudent extends Student {
    constructor(name, age, grade, subject) {
        super(name, age, grade);
        this._subject = subject;
    }

    quote() {
        return `I know ${this._subject} very well`;
    }
};

class lowerGradeStudent extends Student {
    constructor(name, age, grade, skill) {
        super(name, age, grade);
        this._skill = skill;
    }

    statement() {
        return `I can play the ${this._skill} perfectly`;
    }
};


const Demetre = new Student("Demetre", 16, 10);
const Sandro = new highSchoolStudent("Sandro", 15, 8, "physics");
const Giorgi = new lowerGradeStudent("Giorgi", 11, 9, "piano");

console.log(Demetre);
console.log(Sandro);
console.log(Giorgi);

console.log(Demetre.studentInfo());
console.log(Sandro.studentInfo());
console.log(Giorgi.studentInfo());

console.log(Sandro.quote());
console.log(Giorgi.statement());