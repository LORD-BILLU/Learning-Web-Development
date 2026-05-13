// console.log("Now learn Async and Await");

// let prom1 = new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("i am inside of time out");
//         resolve("This gets resolved instantly");
//     }, 9000);   
// });

// console.log(prom1);

// console.log("i am after the promise");

// setTimeout(() => {
//     console.log(prom1);
// }, 15000);

//that was the first part very interesting

// NOW -> 2

console.log("hello i am starting up");

//remember that setimeout takes a call back function
//a function is passed as an argument

function getdata(){
    setTimeout(() => {
        console.log(" i am inside the time out")
        return "i am the data you were asking for";
    }, 5000);
    console.log("i am after time out but inside the function");
}

let data = getdata();

console.log(data);

console.log("i am at the end");

setTimeout(() => {
    console.log(data);
}, 7000);


// Async Await and also Fetch Api Learn these.