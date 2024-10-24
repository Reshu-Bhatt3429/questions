

function fibGenerator(numberPlace){
firstNumber  = 0;
secondNumber = 1;

if(typeof numberPlace === 'number'){

for(let i = 2; i<= numberPlace; i++){

let nextNumber = firstNumber + secondNumber;
firstNumber = secondNumber;
secondNumber = nextNumber;

console.log(firstNumber, secondNumber);
}

}

else{
 console.error("Please enter a valid string: ");

}
// core logic
// let newNumber = firstNumber+secondNumber;

// firstNumber = secondNumber;
// secondNumber = newNumber;

return secondNumber;





}



console.log(fibGenerator(5));