"use strict";
const _ = require("underscore")
const ioServer = require('./socket-server');
const ioclient = require('./socket-client');
const mqttService = require('./mqtt-service');
const ioClient = require('./socket-client');

const fs = require("fs");

class ProcesseService {
    constructor(app,setting){
        this.app = app;
        this.setting = setting;
        this.gatewaysTimers = {};
        /**
         *  open serial port
         */
        
    };
    gatewayStatus = function(gateway){
        let ios = new ioServer.SocketServer(this.app);
        
    }
    init = function(){
        
        /**
        * create mqtt server and sub mqtt topic
        */
       //    let mqttSvc = new mqttService.mqttService(this.setting)
       let gateways = JSON.parse(fs.readFileSync(`${__dirname}/data/gateways.json`));
       let ios = new ioServer.SocketServer(this.app);
       let ioc = new ioClient.socketClient(this.setting.socket);
       
       ios.sub("data",(data,socketId)=>{
            if(data.topic === "booming/gateway/status"){

                let gateway = _.find(gateways,(d)=>{return d.gateway == data.message.gateway});
                data.message.status = true
                if(gateway === undefined){
                    gateways.push(data.message);

                }
                this.gatewaysTimers[data.message.gateway] = data.message;
                ios.pub("gateway",data.message)
                // let mu = JSON.parse(fs.readFileSync(`${__dirname}/data/${data.message.mu}.json`));
                
                // let key = _.find(remote.keys,(d)=> {return d.name == data.message.key});
                // if(key.pulse.length>0){
                    
                // }
                
            }
            
        })
         //    前端页面点击测试方法
        ios.sub("gateway",(data)=>{
            console.log(data)
            
           
       })
      

       /** 
        * create mqtt server and sub mqtt topic
        */
        let mqttSvc = new mqttService.mqttService(this.setting)   

        mqttSvc.subscribeTopicToMqtt("booming/gateway/status");
    }
    // 清理缓存
    dispose = function() {
        this.port.close()

    };

}
module.exports = {
    ProcesseService:ProcesseService
}
