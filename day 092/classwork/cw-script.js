const myForm = document.getElementById("myFirstForm");
const btn = document.getElementById("showInputsBtn");

btn.addEventListener("click", function() {
    console.log(myForm.firstName);
    console.log(myForm.lastName);
    console.log(myForm.userEmail);
});


const userForm = document.getElementById("userForm");

userForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const resultObject = {
        [userForm.name.name]: userForm.name.value,
        [userForm.age.name]: userForm.age.value
    };
    console.log(resultObject);
});