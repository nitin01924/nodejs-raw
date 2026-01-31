import http from "http";

const server = http.createServer(async (req, res) => {
  console.log("server has been started.");



  if (req.url === "/api") {
  res.setHeader("Content-Type", "application/json");
  res.end(
    JSON.stringify({
      status: "success",
      message: "Hello from Node API",
    })
  );
}



});
server.listen(3000, () => {
  console.log("Server running on port 3000");
});
