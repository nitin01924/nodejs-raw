import fs from "fs/promises";
// import fs from "fs";
import { error } from "console";

fs.writeFile(
  "file.txt",
  `This is a text file and it's name is file.txt with extension text.`,
  (error) => {
    if (error) console.error(error);
  },
);

// simple readfile function with callback

// fs.readFile('file.txt', (error, data)=>{
//   if (error)
//     console.error(error)
//   else
//     console.log(data.toString())
// })

// async-await Example 1.

async function readinfo() {
  try {
    const info = await "i think it is going good.";
    console.log(info);
  } catch {
    console.log(error);
  }
}
readinfo();

// reading files with async-await

async function readfile() {
  try {
    const content = await fs.readFile("file.txt", "utf-8");
    console.log(content);
  } catch (error) {
    console.log(error);
  }
}
readfile();
