console.log("callback functions");

console.log("BIllu is a hacker");
console.log("tillu is a hecker");

setTimeout(() => {
    console.log("i am running after 2 seconds");
}, 2000);

console.log("ENd of the script");

const callback = (arg)=>{
    console.log(arg);
};

const loadScript = (src,callback)=>{
    let sc = document.createElement('script');
    sc.src = src;
    sc.onload = callback("BIllu");
    document.head.append('sc');
};

// loadScript("");


