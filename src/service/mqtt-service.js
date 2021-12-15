"use strict"

const mqtt = require("mqtt");
const ioClient = require('./socket-client');

class mqttService{
    
    constructor(setting){
        let ioc = new ioClient.socketClient(setting.socket);
        
        this.client = mqtt.connect(setting.mqtt.url,setting.mqtt.option);
        this.client.on("connect",()=>{
            console.log(`mqtt connect success usl: ${setting.mqtt.url}`)
        });
        this.client.on("message", (topic, message)=>{
            let data = {
                topic: topic,
                message: JSON.parse(message)
            }
            // console.log("test")
            if(topic == "testtopic/command"){
                return ioc.publish("test",data.message.pulse)
            }else{
                ioc.publish("data",data)
            }
        });
        this.client.on("reconnect", (err)=>{
            console.log("reconnect",err);
        })
    }
    start(){
        console.log("this is start")
    }
    subscribeTopicToMqtt(topic,options = {qos: 1 }){
        this.client.subscribe(topic, options)
    }


} 
module.exports = {
    mqttService: mqttService
}