import express from 'express';
var router = express.Router();
import indexRouter from "./routers/indexRouter"

// router.use('/test', function(req, res, next) {
//   console.log("test")
//   res.render('test', { title: 'Express' });
// });

/* GET home page. */
router.get('/', indexRouter.get);


export default router;
 