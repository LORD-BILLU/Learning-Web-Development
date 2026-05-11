console.log("Event BUbbling in JS");

document.querySelector(".child").addEventListener('contextmenu',()=>{
    alert("child div tag was right clicked");
});

document.querySelector(".child-container").addEventListener('contextmenu',(e)=>{
    e.stopPropagation();
    alert("child-container span tag was right clicked");
});

document.querySelector(".container").addEventListener('contextmenu',()=>{
    alert("container div tag was right clicked");
});

//the alert msg click order would be like this
//1 child 
//2 chid-container
//3 container