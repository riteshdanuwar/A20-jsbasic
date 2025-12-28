// console.log(typeof +"1");
// console.log([] == []);
// console.log("b" + "a" + +"a" + "a");
// console.log("1"+ +"1");

// const apiResponse = {
//   data: [
//     { id: 1, name: "Messi", isAdmin: false, hasUserManagementAccess: false },
//     { id: 2, name: "Pedri", isAdmin: true, hasUserManagementAccess: true },
//     { id: 3, name: "Yamal", isAdmin: true, hasUserManagementAccess: false },
//   ],
//   responseCode: 200,
//   responseMessage: "Success",
// };

// const numbers = [1,2, 3, 4, 5];

// const loopNumber = (arr) => {
//   numbers.map((num) => {
//     if (num % 2 === 0) {
//       console.log(num);
//     }
//   });
// };

// const loopNumber = () => {
//   const results =numbers
//     .filter((num) => num % 2 === 0)
//     .map((num) => (num*2));
//     return results;
// };

// console.log(loopNumber());

const numbers = [1, 5, 2, 3, 4, 5, 5];

const loopNumber = () => {
  const results = numbers.filter((num) => num !== 5).map((num) => num * 3);

  return results;
};

console.log(loopNumber());

// create a function that use map and filter
// and find filter and find diffrent

const fruits = [
  "apple","banana","apple","mango","orange","grapes","apple","pineapple","kiwi","watermelon",];

const Fruit = () => {
  const results = fruits
    .filter((fruit) => fruit !== "apple")
    .map((fruit) => fruit.toUpperCase());

  return results;
};

console.log(Fruit());


// Filter
// Returns ALL matching elements

// Always returns an array

// Use when you need multiple results



// find()

// Returns ONLY the first matching element

// Returns a single value, not an array

// Stops searching after first match




