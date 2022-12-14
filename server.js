const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {});

app.use(express.static('public'));

io.on("connection", (socket) => {
  
});

httpServer.listen(3000, () => {
  console.log('Server is listening on PORT 3000');
});