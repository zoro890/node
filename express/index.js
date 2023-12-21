const express = require('express')
const {v4 : uuidv4} = require ("uuid");
const generateId = require ("./generateid");
const app = express()

app.get('/', function (req, res) {
 console.log(uuidv4());
 console.log(generateId(1));
  res.send('Hello World');
});
app.get('/home', function (req, res) {
 console.log(uuidv4());
  res.send('Home');
})

app.listen(3000,"127.0.0.1",() => {
    console.log("Server is listening on port 8000");
   })