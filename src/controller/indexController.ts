const fs = require("fs");
const _ = require("underscore");

const indexController = {
  
  query (parameter: any) { // 查
    parameter.res.render('index');
  }
}

export default indexController