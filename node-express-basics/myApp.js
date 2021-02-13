var express = require('express');
var app = express();
// Lesson 1: Print message to console
console.log("Hello World");

// Lesson 2: All get requests to "/" receive "Hello Express" message
app.get('/',(req,res)=>{
  res.send("Hello Express")
})

































 module.exports = app;
