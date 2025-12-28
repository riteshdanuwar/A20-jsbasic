// const arr=["messi","ronaldo","neymar","mbappe","salah"];
// const printNames=()=>{
// arr.map((name)=>{
//     console.log(`Hello my name is ${name}`);
// console.log("Hello my name is "+name);
// })
// }
// printNames();

// const numbers=[1,2,3,4,5,6,7,8,9,10];
// console.log( numbers.includes(5)); // true
// console.log( numbers.includes(15)); // false

const arr = ["messi", "ronaldo", "neymar", "mbappe", "salah"];

const printName = (name) => {
  //   arr.map((name) => {
  // if (name.includes("messi")) {

  console.log("Hello my name is " + name);
};
//   });

printName("messi");

const numb = [9, 9, 9, 9];
console.log(numb.filter((num) => num === 2));
console.log(numb.find((num) => num === 2));
console.log(numb.includes(9));
console.log(numb.every((num) => num % 2 != 0));

//
