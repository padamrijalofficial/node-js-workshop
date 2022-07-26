// import http from "http";

// const server = http.createServer((req, res) => {

//     switch (req.url) {
//         case "/books":
//             res.writeHead(200);
//             res.end("Book is working");  
//             break;
//         case "/others":
//             res.writeHead(200);
//             res.end("Others is working!!!");
//             break;
//         default:
//             res.writeHead(200);
//             res.end("Backend is working");
//     }
    //or
    // if (req.url === "/books") {
    //     res.writeHead(200);
    //     res.end("Book is working");  
    // }

    // else if (req.url === "/others") {
    //     res.writeHead(200);
    //     res.end("Others is working!!!");
    // }

    // else {
    //     res.writeHead(200);
    //     res.end("Backend is working");
    // }

//     console.log(res);
// });

// server.listen(8000, () => {
//     console.log("server has started"); 
// });

//import chalk from "chalk"; 

//console.log(chalk.bgBlue("Hello World!!!")); 

import winston from "winston";

const logger = winston.createLogger({
    transports: [
      new winston.transports.Console(),
      new winston.transports.File({ filename: 'combined.log' })
    ]
  });

  logger.info({
    level: 'warning',
    message: 'database crash!'
  });


