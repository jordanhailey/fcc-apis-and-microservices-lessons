var express = require('express');
var app = express();
// Lesson 1: Print message to console
console.log("Hello World");

// Lesson 7: root Middleware
const middlewareIPlogger = (req,res,next)=>{
  const method = req.method;
  const path = req.path;
  const ip = req.ip;
  console.log(`${method} ${path} - ${ip}`);
  next();
}
app.use(middlewareIPlogger);

// Lesson 8: Chain Middleware
const middlewareTimeLogger = (req,res,next)=>{
  const now = new Date().toString();
  req.time = now;
  next()
}
app.use('/now',middlewareTimeLogger)

app.get('/now',(req,res)=>{
  res.json({time:req.time})
})

app.get('/',(req,res)=>{
  // Lesson 2: All get requests to "/" receive "Hello Express" message
  // res.send("Hello Express");

  // Lesson 3: Send index.html in the ./views folder as response
  res.sendFile(`${__dirname}/views/index.html`,(err)=>{console.error(err)});
})

// Lesson 4: Adding Middleware
// Route all requests to '/public'
// through 'express.static(<path>)' middleware
const middlewareExample = express.static(`${__dirname}/public`);
app.use('/public',middlewareExample);

// Lesson 5: Serve JSON
// Respond to all GET requests to '/json' with a JSON object
// Lesson 6: setup variable in .env file and use it filter json output
app.get('/json',(req,res)=>{
  const responseObj = {"message":"Hello json"};
  process.env.MESSAGE_STYLE === "uppercase" ?
  responseObj.message = responseObj.message.toUpperCase() : null;
  res.json(responseObj);
})































 module.exports = app;
