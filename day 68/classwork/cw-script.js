const age = 19;

if (age >= 18) {
    console.log("სრულწლოვანი ხარ");
} else {
    console.log("არასრულწლოვანი ხარ");
}


const num = 5;

if (num % 2 == 0) {
    console.log("ლუწი");
} else {
    console.log("კენტი");
}


const score = 75;

if (score >= 90 && score <= 100) {
    console.log("A")
} else if (score >= 80 && score <= 89) {
    console.log("B")
} else if (score >= 70 && score <= 79) {
    console.log("C")
} else if (score >= 60 && score <= 69) {
    console.log("D")
} else if (score < 60) {
    console.log("F")
}


const purchaseAmount = 101;

purchaseAmount > 100 ? console.log(purchaseAmount - (purchaseAmount / 10)) : console.log(purchaseAmount)


let a = 15;
let b = 10;

a > b ? console.log(a) : console.log(b)