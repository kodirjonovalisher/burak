// MIT M-TASK

function getSquareNumbers(arr: number[]) {
    let result = [];

    for (let x of arr) {
        result.push({
            Raqam: x,
            Kvadrati: x * x
        });
    }
    return result;
}

console.log(getSquareNumbers([4, 7, 8, 15, 20, 60,]));
//console.log("HEllo world")