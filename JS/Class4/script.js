// Control Statements

// 1. Conditional statements
// if

// let age = 21
// let result

// if(age >= 18){
//     console.log("Eligible for voting");
// }

// if else

// let age = 16;
// let result;

// if (age >= 18) {
//   console.log("Eligible for voting");
// }else{
//     console.log("not Eligible");
// }

// if else if
// let age = 18;
// let result;

// if (age > 18) {
// console.log("Eligible for voting");
// } else if (age == 18) {
// console.log("Partially eligible");
// } else {
// console.log("not Eligible");
// }

// switch case

// let day = 1

// switch (day) {
//     case 1:
//         console.log("It's a Monday");
//         break;
//     case 2:
//         console.log("It's a Tuesday");
//         break
//     case 3:
//         console.log("It's a Wednesday");
//         break
//     case 4:
//         console.log("It's a Thursday");
//         break
//     case 5:
//         console.log("It's a Friday");
//         break
//     case 6:
//         console.log("It's a Saturday");
//         break
//     default:
//         console.log("Happy weekend");
// }

// 2. Looping statements
// for

// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// while

// let i = 11;

// while(i <= 10){
//     console.log(i);
//     i++;
// }

// do...while

// let i = 11;

// do{
//     console.log(i);
//     i++;
// }while(i <= 10)

// 3. Jumping statements
// break
// continue

let i = 0;

while (i < 5) {
  i++;
  if (i == 4) {
    continue;
  }
  console.log(i);
}
