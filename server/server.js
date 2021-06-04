// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var cors = require('cors');
var router = express.Router();
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({ secret: "Shh, its a secret!" }));

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//try mongoose connect
var port = process.env.PORT || 8080;        // set our port


const videosRouter = require('../routes/videos');
const usersRouter = require('../routes/users');
const otherRouter = require('../routes/other')

app.use('/videos', videosRouter);
app.use('/users', usersRouter);
app.use('/other', otherRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    console.log('punch');
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ 'message': err.message });

    return;
});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});