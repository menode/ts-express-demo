// 第三方模块
import bodyParser from 'body-parser';
import express from 'express';
import { NextFunction, Request, Response } from 'express'; // express 申明文件定义的类型
import createError from 'http-errors';
import path = require('path');
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import router from './routes';

// 自定义模块
import  { systemConfig, setting}   from './config';


const app = express();


const http = require("http").Server(app)
const socket = require("socket.io")

const processeService = require('./service/processe-service');
let sub = new processeService.ProcesseService(http,setting);
sub.init();

// 处理 post 请求的请求体，限制大小最多为 20 兆
app.use(bodyParser.urlencoded({ limit: '20mb', extended: true }));
app.use(bodyParser.json({ limit: '20mb' }));



// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, './public')));


app.use('/', router);


http.listen(systemConfig.port, function() {
    console.log(`the server is start at port ${systemConfig.port}`);
});




export default app;