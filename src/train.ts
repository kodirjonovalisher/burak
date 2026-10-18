// MIT W-TASK

function chunkArray(arr: number[], number: number) {
   let result = [];

   while (arr.length) {
      result.push(arr.splice(0, number));
   }

   return result;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5));
console.log(chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));



// MIT V_TASK

// function countChars(str: string) {
//    let object: any = {};
//    for (let a of str) {
//       object[a] = (object[a] || 0) + 1;

//    }
//    return object;
// }

// console.log("Result1:", countChars("kodirjonov"));
// console.log("Result2:", countChars("aziza"));




// MIT U-TASK

// function sumOdds(num: number) {
//    let count = 0;

//    for (let i = 1; i <= num; i += 2) {
//       count++;
//    }
//    return count;
// }

// console.log("Natija1:", sumOdds(15));
// console.log("Natija2:", sumOdds(9));
// console.log("Natija3:", sumOdds(11));
// console.log("Natija4:", sumOdds(3));



//MIT T-TASK

// function mergeSortedArrays(a: number[], b: number[]) {

//    let arr = [...a, ...b];

//    arr.sort((a, b) => a - b);

//    return arr;
// }

// console.log("Natija:", mergeSortedArrays([4, 6, 2, 26, 9, 1, -3, -7], [5, 18, 35, 98, 100, 11, -1, 0]));





// MIT S-TASK


// function missingNumbers(arr: number[]) {

//    for (let i = 1; i <= arr.length; i++) {
//       if (!arr.includes(i)) {
//          return i;
//       }
//    }

// }


// console.log(missingNumbers([1, 2, 4,]));
// console.log(missingNumbers([1, 2, 3, 4, 6]));





// MIT R-TASK

// function calculate(str: string) {

//     let summa = 0;
//     for (let a of str.split("+")) {
//         summa = summa + Number(a);
//         // summm += Number(a);
//     }
//     return summa;
// }

// console.log("Natija 1:", calculate("6+11+3+50")); // 70
// console.log("Natija 2:", calculate("33+67+60+40")); // 200



// MIT Q-TASK

// function hasProperty(obj: any, key: string) {

//     return key in obj;
// }

// console.log(hasProperty({ name: "Alex", age: 28, city: "Fergana" }, "name"));  // true
// console.log(hasProperty({ name: "Alex", age: 28, city: "Fergana" }, "age")); // true
// console.log(hasProperty({ name: "Alex", age: 28, city: "Fergana" }, "work")); // false
// console.log(hasProperty({ name: "Alex", age: 28, city: "Fergana" }, "salary")); // false






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


/* Request:
   Traditinal Api
   Rest Api
   GraphQL Api
   ...
*/

/* Frontend Development:
   Traditional FD  =>  SSR  =>  EJS
   Modern FD       =>  SPA  =>  REACT
*/

/* Cookies:
   request join
   self destroy
*/

/* Validation:
   Frontend validation
   Backend validation
   Database validation
*/