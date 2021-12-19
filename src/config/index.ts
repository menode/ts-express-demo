import { ISystemConfig } from '../types/config'

export const systemConfig :ISystemConfig = {
    port:8000,
};
export const setting = {
    mqtt: {
        "url": "mqtt://localhost:1883",
        "options": {
          "username": "test",
          "password": "Mqtttest"
        }
    },
    socket:{
        "url": "http://localhost",
        "port": 8000
    },
}
