// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var cors = require('cors');
var router = express.Router();
var app = express();                 // define our app using express
var bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//try mongoose connect
var port = process.env.PORT || 8080;        // set our port


const videosRouter = require('../routes/videos');

app.use('/videos', videosRouter);

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