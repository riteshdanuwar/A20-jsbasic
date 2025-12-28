//  function that takes 2 arg of  arrrays and 1 numbers
// 2 array merge
// filter out numbers greater than 10
// check if input number is present in the filtered array
// if yes ,print n is present
// else warn user to send another number

const findNum = (arr1, arr2, num) => {
  const mergedArray = [...arr1, ...arr2];

  const numberArrLessThan10 = mergedArray.filter(n => n < 10);

  const hasMyNumber = numberArrLessThan10.includes(num);

  if (hasMyNumber) {
    console.log(` is present`);
  } else {
    console.warn("number is missing");
  }
};

const array1 = [10, 20, 30, 40, 50];
const array2 = [1, 3, 5, 7, 9];
const myInputNumber = 9;

findNum(array1, array2, myInputNumber);


//   if (numberArrLessThan10.includes(num)) {
//     console.log(`${num} is present`);
//   } else {
//     console.warn("Number not found. Please send another number.");
//   }