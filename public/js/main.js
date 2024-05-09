var interruptor=document.getElementById("interruptor");
//var socket = io.connect("http://192.168.133.37:5000", { forceNew: true });

var socket = new WebSocket("ws://192.168.25.37:5000/");


socket.onopen = function(e) {
  //alert("[open] Conexión establecida");
  //alert("Enviando al servidor");
  socket.send("Conexión establecida");
};


var resultado = document.getElementById("resultado");
    resultado.innerHTML="El interruptor ha cambiado";


interruptor.addEventListener('change', function(e){

    
    //var io = require('socket.io').listen(80);

    //io.sockets.on('connection', function (socket) {
        
        if (interruptor.checked){
            resultado.innerHTML=`INTERRUPTOR ACTIVADO`;
            socket.send('d2_on');
        }
        else{
            resultado.innerHTML=`INTERRUPTOR ACTIVADO`;
            socket.send('d2_off');
        }
    //});

    /*
    //e.preventDefault(); //desactivamos la opción de envío de formulario
    //cuando cambie el interruptor mandamos su valor mediante un post
    //if (interruptor.checked) {
    //    alert(interruptor.checked);
    //  } else {
    //    alert(interruptor.checked);
    //}
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = function(){
        var resultado = document.getElementById("resultado");
        if (conexion.readyState == 4){
            resultado.innerHTML=conexion.responseText;
        }else{
            resultado.innerHTML="Cargando...."
        }
    }
    conexion.open('POST', 'http://apeteca.atwebpages.com/interruptor/php/guardardato.php', true);
    conexion.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    if (interruptor.checked){
        conexion.send("codigo=000000&dato=1");
    }else{
        conexion.send("codigo=000000&dato=0")
    }
    */
    
});

//https://www.youtube.com/watch?v=RSamjgpCsvw - Hacer un post con ajax