let colors = ["Red", "Green", "Blue"];
//adding color black to the array
colors.push("Black");
console.log(colors);
//removing color Red and swaping blue and green
colors.shift();
colors[0] = "Blue";
colors[1] = "Green";
console.log(colors);
//adding color yellow to index o of the array
colors.unshift("Yellow");
console.log(colors);
