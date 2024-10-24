

//Enter the string as parameter to the function and return the reverse of that string.


function stringReversal(string){

    if(typeof string === 'string'){
     let arr1 = [];
     
     let arr2 = string.split("");
    
     
    while(string.length >0){
        let poppedItem = arr2.pop();
        arr1.push(poppedItem);
    }
    let reverseString = arr1.join("").toString(); 
    console.log(reverseString);

    }
else{
console.log("Invalid string, enter a valid string: ");

}



     } 

stringReversal("gotowards them");