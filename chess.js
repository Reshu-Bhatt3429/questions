

let size = 8; // You can adjust the size here

for (let i = 1; i <= size; i++) {
  let row = "";
  for (let j = 1; j <= size; j++) {
    if ((i + j) % 2 === 0) {
      row += " "; // Even sum (i+j) gives space
    } else {
      row += "#"; // Odd sum gives hash
    }
  }
  console.log(row);
}
