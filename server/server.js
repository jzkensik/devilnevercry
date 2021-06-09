// BASE SETUP
// =============================================================================

// call the packages we need
var express = require('express');        // call express
var cors = require('cors');
var router = express.Router();
var app = express();                 // define our app using express
var bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(cors(corsOptions = { origin: true, credentials: true }))
// app.use(function (req, res, next) {
//     res.header("Access-Control-Allow-Origin", "localhost"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     res.header("Access-Control-Allow-Credentials", true)
//     next();
// });
app.use(cookieParser());
app.set('trust proxy', 1) // trust first proxy
app.use(session({
    cookie: {
        secure: false,
        httpOnly: false
    },
    secret: "Shh, its a secret!",
    resave: false,
    saveUninitialized: true
    //it seems we should use cookie-parser to correctly do this, maybe also body-parser
}))

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