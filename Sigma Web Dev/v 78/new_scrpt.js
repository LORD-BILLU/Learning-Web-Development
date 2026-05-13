console.log("ASYNC AND AWAIT");

// Definately read this code and run to understand working of
// Async and await also
// remove those comments of timeout and run again and see
// Try to predict the printing order of the console logs

async function test(){
    console.log("lets cook");
    return new Promise((resolve,reject)=>{
        // setTimeout(() => {
            console.log("inside the timeout");
            resolve(true);
        // }, 4000);
    });
}

console.log("yo yo")

async function main(){
    console.log("confusion 1");
    await test();
    console.log("confusion 2");
    await test();
    console.log("confusion 3");
}

main();

console.log("this is a tricky Print i am dead");

