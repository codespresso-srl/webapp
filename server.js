const express = require('express');
const app = express();
const path = require('path');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");


// // important if behind a reverse proxy to ensure client IP is passed to req.ip (Heroku, Bluemix, AWS ELB, Nginx, etc)
// app.enable("trust proxy"); 

// Rate Limiter - limit each IP to 100 req/windowMs
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100
});

app.use("/api/", apiLimiter);

// Disable x-powered-by header, increased security
app.use(helmet())
app.disable('x-powered-by')


app.use(express.static(path.join(__dirname, 'public')));
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.use(express.static('/css'));

app.listen(3000);
