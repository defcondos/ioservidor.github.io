var socket = io.connect("http://192.168.200.37:5000", { forceNew: true });

socket.on("messages", function (data) {
  console.log(data);
  render(data);
});

function render(data) {
    var html = data
      .map(function (elem, index) {
        return `<div>
                <strong>${elem.author}</strong>:
                <em>${elem.text}</em>
              </div>`;
      })
      .join(" ");
  
    document.getElementById("messages").innerHTML = html;
  }