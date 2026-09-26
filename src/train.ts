// MIT N- TASK

function palindromCheck(word: string) {

    let reverse = "";

    for (let a of word) {

        reverse = a + reverse;
    }

    return word === reverse;
}

console.log("Natija 1:", palindromCheck("aziza"));

console.log("Natija 2:", palindromCheck("alisher"));

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