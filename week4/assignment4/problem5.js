function reverseArray(arr) {
    // Return a new array with elements in reverse order
    // Don't use the built-in reverse() method!
    // Don't modify the original array

    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

function removeDuplicates(arr) {
    // Return a new array with duplicates removed
    // Maintain original order of first occurrence

    let uniqueElements = [];
    for (let element of arr) {
        if (!uniqueElements.includes(element)) {
            uniqueElements.push(element);
        }
    }
    return uniqueElements;
}

function rotateArray(arr, positions) {
    // Rotate array to the right by 'positions'
    // Handle positions larger than array length

    let len = arr.length;
    if (len === 0) return arr.slice(); // Return empty array if input is empty
   positions = positions % len; // Handle positions larger than array length
   let rotated = arr.slice(-positions).concat(arr.slice(0, -positions));
   return rotated;
}

function findSecondLargest(numbers) {
    // Find and return the second largest number
    // Return null if array has less than 2 unique values

    let uniqueNumbers = [...new Set(numbers)];
    if (uniqueNumbers.length < 2) return null;
    uniqueNumbers.sort((a, b) => b - a);
    return uniqueNumbers[1];
}