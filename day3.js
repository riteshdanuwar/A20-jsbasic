const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];

console.log(arr1 + arr2);

//spread operator
const mergedArr = [...arr1, ...arr2];
// console.log(mergedArr);

// const mergedArray =(a,b)=>{
//     const result=[...a,...b];
//     return result;
// };
const mergedArray = (a, b) => [...a, ...b];
//    =>this arrow work as return
console.log(mergedArray(arr1, arr2));

// const mergeFourArrays = (a, b, c, d) => [...a, ...b, ...c, ...d];

// console.log(mergeFourArrays(arr1, arr2, arr3, arr4));

const person = {
  name: "Ritesh",
  age: 19,
};
const newPerson = {
  ...person,
  age: 20,
};

// console.log(newPerson);

// const personDetails=(name,age)=>{
//  console.log(`My name is ${name} and my age is ${age}`);
// }
// personDetails(["Ritesh",19]);

console.log(newPerson);

// const personDetails=(studentName,age)=>{
//     const person={
//         name: studentName,
//         age: age,
//     };
//     return person;
// };
const personDetails = (name, age) => ({ name, age });
console.log(personDetails("Rit", 19));

//if we use object literal in arrow function then we have to use parenthesis otherwise it will consider as function body.


