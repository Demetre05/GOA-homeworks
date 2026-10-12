const promise = new Promise(() => {
    setTimeout(() => {
        console.log("Hello!");
    }, 2000)
});

const checkNumber = number => {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(number > 0) {
                resolve("Positive number");
            } else if(number < 0) {
                reject("Negative number");
            }
        }, 1000)
    });

    promise.then(() => {
        console.log("This number is positive!");
    }).catch(() => {
        console.log("This number is negative!");
    });

    return promise;
};

checkNumber(5);

const getData = () => {
    let promise = new Promise(resolve => {
        setTimeout(() => {
            resolve("Data loaded!");
        }, 3000);
    });

    promise.then(() => {
        console.log("This data is loaded!");
    });

    return promise;
};

getData();