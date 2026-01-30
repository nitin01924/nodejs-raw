import http from "http";

const server = http.createServer(async (req, res) => {
  console.log("server has been started.");
  if (req.url === "/") {
    res.end("home page");
  } else if (req.url === "/about") {
    res.end("this is is about page.");
  } else {
    res.end("404 not found.");
  }
});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
