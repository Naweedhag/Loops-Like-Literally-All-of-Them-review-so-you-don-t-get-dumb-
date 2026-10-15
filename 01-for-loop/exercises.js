// Collect values that appear more than once in an array.
const names = ["navid", "nima", "mehdi", "navid", "kambiz", "nima"];
const duplicates = [];

for (let i = 0; i < names.length; i++) {
  for (let j = i + 1; j < names.length; j++) {
    if (names[i] === names[j] && !duplicates.includes(names[i])) {
      duplicates.push(names[i]);
    }
  }
}

console.log("Duplicates:", duplicates);
