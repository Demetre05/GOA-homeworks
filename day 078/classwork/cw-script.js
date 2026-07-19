const myForEach = (arr, cal) => {
    for (let i = 0; i < arr.length; i++) {
        cal(arr[i], i, arr);
    }
};

const myMap = (arr, cal) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(cal(arr[i], i, arr));
    }
    return res;
};

const myFilter = (arr, cal) => {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if (cal(arr[i], i, arr)) {
            res.push(arr[i]);
        }
    }
    return res;
};

const myFindIndex = (arr, cal) => {
    for (let i = 0; i < arr.length; i++) {
        if (cal(arr[i], i, arr)) {
            return i;
        }
    }
    return -1;
};

const myReduce = (arr, cal, val) => {
    let acc = val !== undefined ? val : arr[0];
    let firstIndex = val !== undefined ? 0 : 1;

    for (let i = firstIndex; i < arr.length; i++) {
        acc = cal(acc, arr[i], i, arr);
    }
    return acc;
};