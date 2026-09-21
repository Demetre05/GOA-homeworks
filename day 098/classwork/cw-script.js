const students = [
    { name: "Nika", age: 20, grades: [90, 85, 95] },
    { name: "Ana", age: 22, grades: [78, 88, 92] },
    { name: "Giorgi", age: 19, grades: [95, 91, 89] }
];

const addStudents = (...studs) => {
    for(const i of studs) {
        students.push(i);
    };
    return students;
};

const getStudentInfo = (stud) => {
    let bool = "";
    stud.age >= 18 ? bool = true : bool = false;
    let student = {...stud, isAdult: bool};
    return student;
};

const upgradeGrades = (stud, ...grds) => {
    let student = {...stud};
    for(const i of grds) {
        student.grades.push(i);
    };
    return student;
};