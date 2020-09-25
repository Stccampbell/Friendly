const authRouter = require('express').Router();
const passport = require('../services/auth/local');
const authHelpers = require('../services/auth/auth-helpers');
const userController = require('../controllers/users-controller');

authRouter.post('/register', userController.create);

authRouter.post('/login', passport.authenticate('local', {
        successRedirect: '/api/auth/verify',
        failureRedirect: '/api/auth/verify',
        failureFlash: true,
    })
);

authRouter.get('/verify', (req, res) => {
    if(req.user) return res.status(200).json({
        message: 'ok',
        auth: true,
        data: {
            user: req.user,
        }
    });
    else return res.status(400).json({
        message: 'Login failed',
        auth: false,
        data: {
            user: null,
        }
    });
});

authRouter.get('/logout', (req, res) => {
    req.logOut();
    res.json({
        message: 'logged out',
        auth: false,
        data: {
            user: null,
        }
    })
});

authRouter.get('/userGet/:id', userController.show);

module.exports = authRouter;