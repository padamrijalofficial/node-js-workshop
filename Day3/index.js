// import * as fs from 'fs/promises'; 

// fs.writeFile();

// await fs.writeFile("hello.txt", "Hello Friend");

// try { 
//     let contents = await fs.readFile("hello.txt","utf-8");
//     console.log(contents);
// }

// catch (err) {
//     console.log(err);
// }

//console.log("exited");

//unlink => delets the file
//await fs.unlink("a.txt");

//await fs.rmdir("test");
//--------------------------------------------------------------------
// import { URL } from "url";

// const url = new URL("https://google.com/eminem");

// console.log(url.protocol);
// console.log(url.hostname);
//--------------------------------------------------------------------------
import http from "http";
const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end("backend is working");
});

server.listen(8000, () => {
    console.log("server is running");
})


