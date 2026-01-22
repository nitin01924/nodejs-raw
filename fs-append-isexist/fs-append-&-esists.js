import fs, { readFile } from "fs";

console.log("1st");

// fs.writeFile('text.txt', 'This file is working properly for the append fucntion.',(error)=>{
//     if (error){
//         console.error(error)
//     }
//     fs.readFile('text.txt', (error, data)=>{
//         if (error){
//             console.error(error)
//         }
//         console.log(data.toString())
//     })
// })
fs.appendFile("text.txt", "\nApppended text in new line.", () => {});

 if (fs.existsSync("text.txt")) {
  console.log("yes it exists");
} else {
  console.log("file does not exist");
}

console.log("2nd");
