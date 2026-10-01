// MIT Q-TASK

function hasProperty(obj: any, key: string) {

    return key in obj;
}

console.log(hasProperty({ name: "Alex", age: 28, city: "Fergana" }, "name"));  // true
console.log(hasProperty({ name: "Alex", age: 28, city: "Fergana" }, "age")); // true
console.log(hasProperty({ name: "Alex", age: 28, city: "Fergana" }, "work")); // false
console.log(hasProperty({ name: "Alex", age: 28, city: "Fergana" }, "salary")); // false






// MIT P-TASK

// function objectToArray(obj: any) {
//     let arr = [];

//     for (let key in obj) {
//         arr.push([key, obj[key]]);


//     }

//     return arr;

// }

// console.log(objectToArray({ a: 34, b: 40, c: 60 }));




// MIT O - TASK


// function calculateSumofnumbers(arr: any[]) {

//     let summa = 0;

//     for (let a of arr) {

//         if (typeof a === "number") {

//             summa = a + summa;
//         }
//     }
//     return summa;
// }

// console.log(calculateSumofnumbers([20, "40", 53, "", "Alex", 47, "66"]))



// MIT N- TASK

// function palindromCheck(word: string) {

//     let reverse = "";

//     for (let a of word) {

//         reverse = a + reverse;
//     }

//     return word === reverse;
// }

// console.log("Natija 1:", palindromCheck("aziza"));

// console.log("Natija 2:", palindromCheck("alisher"));

// MIT M-TASK

// function getSquareNumbers(arr: number[]) {
//     let result = [];

//     for (let x of arr) {
//         result.push({
//             Raqam: x,
//             Kvadrati: x * x
//         });
//     }
//     return result;
// }

// console.log(getSquareNumbers([4, 7, 8, 15, 20, 60,]));
// //console.log("HEllo world")


/* Project Standards:
 -Logging standards
 -Naming standards
    function, method, variable => CAMEL    goHome
    class => PASCAL                        MemberService
    folder => KEBAB
    css => SNAKE                           button_style

    Error handling
*/

// Get : qaysidir page ga kirish uchun yoki qaysidir malumotlarni olish uchun xizmat qiladi
// Post : bu malumotlarni uzgartirish uchun yani mutation uchun