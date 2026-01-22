// const fs = require("fs");
import fs from "fs";

// Synchronously
console.log("1 first");

fs.writeFileSync(
  "test.txt",
  "This is a blocking operation in the Node.js\nbecause this is a writefiesync operation.\nSo, whenever it runs it will delay the program.\n and other things will run after it's completion.",
);

const syncfn = fs.readFileSync("test.txt", "utf-8");
console.log(syncfn);

console.log("2 second\n");

// Asynchronously
console.log("1st ");
fs.writeFile(
  "test2.txt",
  "This is a non blocking operation in Node.js\nSo, it will not affect any other program.\n and all other work will be done first then that.",
  () => {},
);
fs.readFile("test2.txt", (err, data) => {
  console.log(data.toString());
});
console.log("2nd");


