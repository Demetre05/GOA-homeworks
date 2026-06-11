// anonymous - ეწოდება ფუნქციას, რომლის დროს ჩვენ ვქმნით ცვლადს, სადაც ცვლადის სახელს ვუტოლებთ ფუნქციას და მის პარამეტრ(ებ)ს
// პარამეტრი - ცვლადის სახელი, რომელიც ფუნქციის გამოძახებისას მინიჭებული მნიშვნელობის(არგუმენტის) სახით კოდის ბლოკში ჩაისმევა
// default - პარამეტრი თავიდანვე მქონე არგუმენტით, რომელიც გამოიყენება, თუ ფუნქციის გამოძახებისას მომხმარებელმა არგუმენტი არ მიუთითა


function per1(a) {
    switch(true) {
        case (a < 100):
            return a / 10;
        case (a < 200):
            return a / 5;
        default:
            return (a / 10) * 3;
    };
};

console.log(per1(50))


const per2 = function(a) {
    switch(true) {
        case (a < 100):
            return a / 10;
        case (a < 200):
            return a / 5;
        default:
            return (a / 10) * 3;
    };
};

console.log(per2(150))


const per3 = a => {
    switch(true) {
        case (a < 100):
            return a / 10;
        case (a < 200):
            return a / 5;
        default:
            return (a / 10) * 3;
    };
};

console.log(per3(250))


const num = n => {return n > 10}

console.log(num(15))