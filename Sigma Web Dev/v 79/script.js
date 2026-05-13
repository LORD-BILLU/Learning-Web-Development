console.log("TRY and Catch Error");

let a = prompt("enter the number a: ");

let b = prompt("enter the number b: ");

if(isNaN(a) || isNaN(b)){
    throw SyntaxError("Sorry this is not allowed");   
}

let sum = a+b;
console.log("The Sum is : ",sum);

try {
    //setimeout if we put a async function then some error happens 
}catch(error) {
    
}
finally{

}

//finally is used when try catch is inside function and try and 
//catch both have return statement in them
