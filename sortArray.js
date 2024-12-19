// Declare arrays
const numbers = [24, 65, 21, 5, 9, 32, 42, 80, 57];
const names = ["Zenvo", "Erica", "Jordie", "Alicia", "Redon"];

// Merge arrays
const mergedArray = [...numbers, ...names];
console.log("Merged Array:", mergedArray);

// Sort numbers in reverse order
const sortedNumbers = [...numbers].sort((a, b) => b - a);
console.log("Numbers Sorted in Reverse:", sortedNumbers);
