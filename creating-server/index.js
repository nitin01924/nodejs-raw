import http from "http";

// NORMAL METHOD

// const server = http.createServer((req, res) => {
//   res.end("Your node server is working properly.");
// });
// server.listen(3000, () => {
//   console.log("server is running...");
// });

// ASYNC-AWAIT METHOD.

const server = http.createServer(async (req, res) => {
  console.log("process has been started.");

  await new Promise((Response) => setTimeout(Response, 2000));
  res.end("data processed after 2 second.");
  console.log("ended process");
});
server.listen(3000);
