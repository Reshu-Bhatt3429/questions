

function oddEvenjs(number) {

if(typeof number === 'number'){

    if(number % 2 === 0){
        return "Even Number";
    }
    else {
         return "Odd Number";

    }
}
else{
 return "Enter valid number:";

}
}



console.log(oddEvenjs(2456));