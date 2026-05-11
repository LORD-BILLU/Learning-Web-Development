console.log("i am a promise dancer");

let prom1 = new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("yes i am done");
        hi = "Hello everyone";
        resolve("resolveed");
        reject("rejected");
        
    },1000);
});

prom1.then((a)=>{
    console.log(a);
}).catch((err)=>{
    console.log(err);
}).then((a)=>{
    console.log(a);
});

