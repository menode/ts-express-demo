"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const _ = require("underscore");
const indexController = {
    query(parameter) {
        parameter.res.render('index');
    }
};
exports.default = indexController;
