const student = {
    name: "Nika",
    age: 20,
    skills: ["HTML", "CSS", "JavaScript"],
    city: "Tbilisi"
};

const {name, age} = student;
console.log(name, age);

for(const key in student) {
    console.log(key);
    console.log(student[key]);
};

const {skills} = student;
for(const el of skills) {
    console.log(el);
};

const showSkills = (first, ...otherSkills) => {
    console.log(first);
    console.log(otherSkills);
};

showSkills(skills[0], skills[1], skills[2]);