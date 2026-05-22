console.log("THis is a Spotify Clone made by me");

let a = fetch("http://127.0.0.1:3000/songs/");
let response = await a.text();
console.log(response);
