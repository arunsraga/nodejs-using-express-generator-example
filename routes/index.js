var express = require('express');
var router = express.Router();
var mymodel = require('./../schema/user');


/* GET home page. */
router.get('/', function(req, res, next) {
  mymodel.find({}, function(err, data){
    if(err){
      console.log('err', err);
      res.render('index', { title: 'Express' });
    } else {
      console.log('data', JSON.stringify(data));
      mymodel({"name":"i am tetsing you"}).save(function(err, data){
        if(err){
          console.log('hi error found', err);
        } else {
          console.log('data is here', JSON.stringify(data));
          res.render('index', { title: 'Express' });
        }
      })
    }
  })
});

module.exports = router;
