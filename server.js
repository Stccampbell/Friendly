const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const passport = require('passport');

// //video chat stuff
// const { chatToken, videoToken, voiceToken } = require('./tokens');

//auth-Helpers
const authHelpers = require('./services/auth/auth-helpers')

//initialize app
const app = express();
require('dotenv').config();

//telling what the app should use
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(
    session({
        key: process.env.SECRET_KEY,
        secret: process.env.SECRET_KEY,
        resave: false,
        saveUninitialized: true,
    }),
);
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('public'));

//video chat stuff
// const sendTokenResponse = (token, res) => {
//     res.set('Content-Type', 'application/json');
//     res.send(
//       JSON.stringify({
//         token: token.toJwt()
//       })
//     );
//   };


const http = require('http').createServer(app);
const socket = require('socket.io');
const io = socket(http)

io.on('connection', (socket) => {
    console.log(`A user connected on ${socket.id}`);

    socket.on('SEND_MESSAGE', function(data) {
        io.emit('RECEIVE_MESSAGE', data);
    })
  });


//Tell the app to listen to the port
const PORT = process.env.PORT || 3001;

http.listen(PORT, () => {
    console.log(`Listening on ${PORT}`);
});

// app.listen(PORT, () => {
//     console.log(`Listening on ${PORT}`);
// });

//tell the app to say hello world at /
app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Routes
const communicationRouter = require('./routes/communication-router');
app.use('/communication', communicationRouter)

const authRouter = require('./routes/auth-routes');
app.use('/api/auth', authRouter);

app.use('*', (req, res) => {
    res.status(400).json({
        message: 'Not Found!',
    });
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json({
        error: err,
        message: err.message,
    });
});