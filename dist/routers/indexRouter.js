"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const indexController = require("../controller/indexController");
const indexRouter = {
    get(req, res, next) {
        indexController.query({ req, res, next });
    }
};
exports.default = indexRouter;
