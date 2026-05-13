console.log("Hackers Terminal Project Sigma");

// Initializing Hacking...
// Reading your Files...
// Password Files Detected...
// Sending all passwords and personal files to Server...
// Cleaning Up...

// let arr = ["Initializing Hacking","Reading your Files","Password Files Detected","Sending all passwords and personal files to Server","Cleaning Up"];

let hi = document.getElementById('initial');

function dots(hi){
    return new Promise((resolve)=>{
        setTimeout(() => {
            hi.innerText = hi.innerText + " .";
            resolve();
        }, 200);
        
    });
}

function just_wait(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            //do nothing
            resolve();
        }, 200);
        
    });
}

async function generate_dot(hi){
    return new Promise(async (resolve)=>{
        let data = hi.innerText;

        for(let i=1;i<=9;i++){
            await dots(hi);
            if(i%3==0){
                await just_wait();
                hi.innerText = data;
            }
        }
        resolve();
    });
}

async function main(){
    await generate_dot(hi);
}

main();