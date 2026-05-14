console.log("Advanced JavaScript");

//first we learn about IIFE

async function hello(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(45);
        }, 3000);
    });
}

(async function main(){
    let a = await hello();
    console.log(a);
    let b = await hello();
    console.log(b);
})()


///// Destructuring

let [x,y] = [1,5,7] // 7 doesnot get assingned to anything
// x = 1 and y = 5

let [a,b,...rest] = [1,2,3,4,5,6,7,8,9];

let obj = {
    a : 1,
    b : 2,
    c : 3
}

let {p,q} = obj;
//p = 1 and q = 2

