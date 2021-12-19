"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 第三方模块
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const http_errors_1 = __importDefault(require("http-errors"));
const path = require("path");
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("./routes"));
// 自定义模块
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
const http = require("http").Server(app);
const socket = require("socket.io");
const io = socket(http);
// 处理 post 请求的请求体，限制大小最多为 20 兆
app.use(body_parser_1.default.urlencoded({ limit: '20mb', extended: true }));
app.use(body_parser_1.default.json({ limit: '20mb' }));
// view engine setup
app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'jade');
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.static(path.join(__dirname, '../public')));
app.use('/', routes_1.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next((0, http_errors_1.default)(404));
});
// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
// error handler
app.use(function (err, req, res, next) {
    return res.sendStatus(500);
});
app.get('/', function (req, res) {
    res.send("Hello World!");
});
http.listen(config_1.default.port, function () {
    console.log(`the server is start at port ${config_1.default.port}`);
});
exports.default = app;
