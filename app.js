// es6 functions
// Arrow functions ..............................................................

// const sum = (a,b)=>{
//     return a+b
// } 
// const minus = (a,b)=> a-b //short way
// const rounds = a => Math.round(a)
// console.log(rounds(9.9))

// This will not work because a regular function creates its own scope,
// which results in two different scopes being created.
// const obj = {
//     name : "haseeb",
//     something: "hello",
//     print : function(){
//         setTimeout( function(){
//             console.log(this.something + this.name)
//         },1000)
//     }
// }
// obj.print()

// it will work beacuse, arrow functions do not create their own this context. Instead, they inherit this from their surrounding scope.
// const obj = {
//     name : "haseeb",
//     something: "hello",
//     print : function(){
//         setTimeout( ()=>{
//             console.log(this.something + this.name)
//         },1000)
//     }
// }
// obj.print()


// function multiply(a, b = 1) {
//     return a * b;
//   }
//   console.log(multiply(5, 2));
//   // Expected output: 10
//   console.log(multiply(5));
//   // Expected output: 5


// rest parameter .............................

// const sum = (a,b,...z)=> a+b+z.reduce((acc,curr)=>acc+curr,0)
// console.log(sum(1,2,10,10))

// other way
// const sum = (...args) => args.reduce((acc, curr) => acc + curr, 0);

// console.log(sum(1, 2, 10, 10)); // Output: 23

// another way

// const sum = (a, b, ...z) => {
// let total = a+b
// z.forEach((num)=>total +=num)
// return total
// };
// console.log(sum(1, 2, 9, 5, 6, 7, 9)); // Output: 39