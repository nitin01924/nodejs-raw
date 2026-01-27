import fs from "fs/promises";
// import fs from "fs";

fs.writeFile(
  "file.txt",
  `This is a text file and it's name is file.txt with extension text.`,
  (error) => {
    if (error){
      console.error(error);

    }
  },
);
  
// simple readfile function with callback

// fs.readFile('file.txt', (error, data)=>{
//   if (error)
//     console.error(error)
//   else
//     console.log(data.toString())
// })

// readfile with promises.

fs.readFile("file.txt", "utf-8")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });




