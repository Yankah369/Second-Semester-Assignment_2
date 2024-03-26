const http = require("http");

const port = 3000;
const hostname = "localhost";

function requestHandler(req, res) {
  if (req.method === "GET" && req.url === "/books"){
    return res.end("getting books from server")
  }  
  if (req.method === "PUT" && req.url === "/books"){
    return res.end("modifying books")
  }  
  if (req.method === "DELETE" && req.url === "/books"){
    return res.end("deleting books books from server")
  }  
  if (req.method === "GET" && req.url === "/books/author/"){
    return res.end("getting book titles of a particular author from server")
  }  
  if (req.method === "POST" && req.url === "/books/author/"){
    return res.end("getting books from server")
  }  
  if (req.method === "PUT" && req.url === "/books/author/"){
    return res.end("getting books from server")
  }   
}

const server = http.createServer(requestHandler);

server.listen(port, () =>
  console.log(`Server running at http://${hostname}:${port}/`)
);