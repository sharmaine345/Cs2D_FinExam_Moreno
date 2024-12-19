// Step 1: Define the multidimensional array
let names = ["Genevieve", "Juan", "Luna", "Gabriel", "Elise"];
let ages = [24, 65, 21, 5, 9];

// Step 2: Restructure the array to contain [name, age] pairs
let restructuredArray = names.map((name, index) => [name, ages[index]]);

// Step 3: Log each [name, age] pair to the console
restructuredArray.forEach(item => {
    console.log(item);
});
