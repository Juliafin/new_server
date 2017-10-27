const express = require('express');

const someApp = express();
const bodyParser = require('body-parser');

someApp.use(bodyParser.json());
someApp.use(bodyParser.urlencoded({extended:false}))


someApp.use(express.static('public'));


function sum (req, res, next) {
  // var reqBody = JSON.parse(req.body);
  console.log(req.body)
  req.body.c = parseInt(req.body.a) + parseInt(req.body.b);
  next();
}

// Middleware, used for every route
someApp.use(sum)

someApp.get('/hello', (req, res) => {

  res.sendFile(__dirname + '/index.html')
});


someApp.post('/posting', /* // sum runs here, */  (req, res) => {

  console.log(req.headers)
  
  return res.status(200).json({message: "Success", data: req.body})


})


someApp.listen('3000', () => {
  console.log('Server is listening on port 3000');
})