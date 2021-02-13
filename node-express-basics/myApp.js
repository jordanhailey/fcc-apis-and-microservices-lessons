var express = require('express');
var app = express();
// Lesson 1: Print message to console
console.log("Hello World");

app.get('/',(req,res)=>{
  // Lesson 2: All get requests to "/" receive "Hello Express" message
  // res.send("Hello Express")

  // Lesson 3: Send index.html in the ./views folder as response
  res.sendFile(`${__dirname}/views/index.html`,(err)=>{console.error(err)})
})

// Lesson 4: Adding Middleware
// Route all requests to 'public/'
// through 'express.static(<path>)' middleware
const middlewareExample = express.static(`${__dirname}/public`)
app.use('/public',middlewareExample)

































 module.exports = app;
