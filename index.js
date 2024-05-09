//https://carlosazaustre.es/websockets-como-utilizar-socket-io-en-tu-aplicacion-web
//https://socket.io/
//Vídeo tutorial para conectar la esp32 a socket.io: https://www.youtube.com/watch?v=jBB4r_emzlI
//Instalación: creamos la carpeta y la abrimos desde Visual Studio
//Iniciamos un proyecto mediante la sentencia npm init -y
//instalamos los módulos express: npm i express --save
//Instalamos los módulos socket.io: npm i express --save

//Despliege en Render.com: https://www.youtube.com/watch?v=Ck9O-QhSnNo
 
var express = require("express");
var app = express();
var server = require("http").Server(app);
//var io = require("socket.io")(server);
const io = require("socket.io")(server, {
  cors: {
   origin: "*",
   methods: ["GET", "POST"],
   transports: ["websocket", "polling"],
   credentials: true,
  },
   allowEIO3: true,
  });


app.use(express.static("public"));

server.listen(5000, function () {
    console.log("Servidor escuchando en http://localhost:5000");
});



io.on("connection", function (socket) {
    console.log("Un cliente se ha conectado");
    socket.emit("messages", "Te has conectado al servidor");

    socket.on("new-message", function (data) {
      console.log(data);  
      io.emit("messages", data);
    });
});

