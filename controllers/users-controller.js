const bcrypt = require('bcryptjs');
const User = require('../models/User');

const UserController = {};

UserController.create = (req, res, next) => {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(req.body.password, salt);
    new User({
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        password_digest: hash
    })
    .save()
    .then(user => {
        req.login(user, (err) => {
            if (err) return next(err);
            res.status(201).json({
                message: 'user successfully created',
                auth: true,
                data: {
                    user,
                }
            })
        });
    }).catch(next);
}

UserController.show = (req, res, next) => {
    User.getById(req.params.id)
      .then((User) => {
        res.json({
          message: 'ok',
          data: { User },
        });
      })
      .catch(next);
  };

module.exports = UserController;