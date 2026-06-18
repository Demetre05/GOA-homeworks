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

switch (true) {
    case (score >= 90 && score <= 100):
        console.log("A");
        break;
    case (score >= 80 && score <= 89):
        console.log("B");
        break;
    case (score >= 70 && score <= 79):
        console.log("C");
        break;
    case (score >= 60 && score <= 69):
        console.log("D");
        break;
    default:
        console.log("F");
}


const purchaseAmount = 101;

purchaseAmount > 100 ? console.log(purchaseAmount - (purchaseAmount / 10)) : console.log(purchaseAmount)


let a = 15;
let b = 10;

a > b ? console.log(a) : console.log(b)