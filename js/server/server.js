// golf fruit APPLE apple DRIP park VISA coffee jack USA visa golf omelet skype queen xbox

var io1 = require('socket.io').listen(8001);
const fetch = require('node-fetch');

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
                    var sleep = new Promise((resolve, reject) => {
                        setTimeout(() => {
                            resolve("done");
                        }, 1000)
                    }).then(() => {
                        socket.emit("callbackGetData", split);
                        console.log("EMITTED CALLBACK")
                    })                    
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
            socket.emit("reload", data);
        })
    })

    socket.on("changeProduct", (data) => {
        fetch('https://vexar.xyz/api/products.php?validation=' + data.validation + '&change=' + data.old + '&to=' + data.change)
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            socket.emit("reload", data);
        })
    })

    socket.on("deleteProduct", (data) => {
        console.log(data);
        fetch('https://vexar.xyz/api/products.php?validation=' + data.validation + '&delete=' + data.delete)
        .then((response) => response.text())
        .then((data) => {
            console.log(data);
            socket.emit("reload", data);
        })
    })
});