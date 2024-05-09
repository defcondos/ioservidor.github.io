//var socket = io.connect("http://localhost:5000", { forceNew: true });
var socket = io.connect("https://ioservidor.onrender.com", {secure: true, rejectUnauthorized: false});

socket.on('connect', function(bolsillo){
    socket.emit("new-message", "Conexión establecida con página web");
    console.log(socket.id);
});

//recibiendo mensajes del servidor
socket.on("messages", function (data) {
    console.log(data);
    resultado.innerHTML = data;
});

var resultado = document.getElementById("resultado");
    resultado.innerHTML="El interruptor ha cambiado";


interruptor.addEventListener('change', function(e){

        if (interruptor.checked){
            resultado.innerHTML=`INTERRUPTOR ACTIVADO`;
            socket.emit("new-message", 'd2_on');
        }
        else{
            resultado.innerHTML=`INTERRUPTOR ACTIVADO`;
            socket.emit("new-message", 'd2_off');
        }
});


/*
socket.onopen = function(e) {
    //alert("[open] Conexión establecida");
    //alert("Enviando al servidor");
    socket.send("Conexión establecida con página web");
  };
  */