var io1 = require('socket.io').listen(8001);
const fetch = require('node-fetch');
const fs = require('fs');

io1.sockets.on('connection', function (socket) {

    console.log("NEW USER!")

    socket.on("getdata", (data) => {
        console.log(data);
        if (data == true) {
            fetch('https://vexar.xyz/api/products.php')
                .then(response => response.text())
                .then((data) => {
                    var split = data.split(" ");
                    for(i = 0; i < split.length; i++){
                        if(split[i].includes(">nbsp<")){
                            console.log("true");
                            var elsplit = split[i].split(">nbsp<");
                            split[i] = elsplit.join(" ");
                            console.log(split[i]);
                        }
                    }
                    socket.emit("callbackGetData", split);
                })
        }
    })

    socket.on("addProduct", (data) =>{
        console.log(data);
        console.log(data.add);
        if(data.add.includes(" ")){
            var datasplit = data.add.split(" ");
            data.add = datasplit.join(">nbsp<");
            console.log(data.add)
        }
        fetch('https://vexar.xyz/api/products.php?validation=' + data.validation + '&add=' + data.add)
        .then((response) => response.text())
        .then((data) =>{
            console.log(data);
            socket.emit("callbackAddProduct", data);
        })
    })
});