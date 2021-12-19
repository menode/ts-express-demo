"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
var router = express_1.default.Router();
const indexRouter_1 = __importDefault(require("./routers/indexRouter"));
// router.use('/test', function(req, res, next) {
//   console.log("test")
//   res.render('test', { title: 'Express' });
// });
/* GET home page. */
router.get('/', indexRouter_1.default.get);
exports.default = router;
