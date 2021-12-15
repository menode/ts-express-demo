"use strict";

const io = require('socket.io');

class SocketServer {
    constructor(app){
        // 监听数据
        this.server = new io.Server(app)
        
    };
    /**
     * 
     * @param {订阅主题} topic 
     * @param {订阅数据} callback 
     */
    sub = function(topic,callback){    
        this.server.on('connection',(socket)=>{
            // console.log(socket)
                // console.log('id',socket.id)//每次connect 的id都不一样
                // console.log('a user connected')
                socket.on(topic,(data)=>{
                    callback(data)
                })
            });
        
       
    };
    pub = function(topic,data){
           
        this.server.emit(topic,data)
    };
    disSub = function(topic){

    }
    // 清理缓存
    dispose = function() {
        
    };

    
    
}
module.exports = {
    SocketServer:SocketServer
}