let birds = ["Owl", "Eagle", "Parrot", "Falcon", "Raven"];

birds[3] = "Flamingo";
console.log(birds[0]);
console.log(birds);
//push() method to add an item to the end of the array
birds.push("Sparrow");
console.log(birds);
//pop() can be used to remove an item from the end of an array
birds.pop();
console.log(birds);
//unshift() method can be used to add an item from the front at index 0
birds.unshift("Vulture");
console.log(birds);
//shift() method can be used to remove an item from index 0
birds.shift();
console.log(birds);
//To get the size of an array, you can access the length property
console.log(birds.length);
//The indexOf() method can be used to find and return the index of item in the array
let pos = birds.indexOf("Parrot");
console.log(pos);
