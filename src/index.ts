import {server as WebSocketServer} from "websocket"
import http from "http";

var server = http.createServer(function (request: any , response: any) {

    console.log(`${new Date()} received request for ${request.url}`);
    response.writeHead(404);
    response.end();

})

server.listen(8000 , function () {
    console.log(` ${new Date() }Server is listening on port 8000`)
});

const wsServer  = new WebSocketServer({

    httpServer: server,



})

