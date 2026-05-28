import fs from "fs/promises"

let a = await fs.readFile("harry.txt");

let b = await fs.writeFile("harry.txt","\n\n\nThis is a Amazing Promise");
console.log(a.toString(),b);