// Array that stores items
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function that swaps elements in an array
const swapElements = (array, index1, index2) => {
  const temp = array[index1];
  array[index1] = array[index2];
  array[index2] = temp;
  return array;
};

// Calling the function with the array and the indexes of the elements to swap
swapElements(array1, 4, 9);
console.log(array1);