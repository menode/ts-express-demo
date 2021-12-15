"use strict"

const ioc = require('socket.io-client');

class socketClient{
    constructor(setting){
        this.socket= ioc.connect(`${setting.url}:${setting.port}`);
    }
    publish = function (topic,data){
        this.socket.emit(topic,data);
    };
}
module.exports = {
    socketClient: socketClient
}
