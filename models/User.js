const db = require('../db/config');

class User {
    constructor({ id, username, name, email, password_digest }) {
        this.id = id || null;
        this.username = username;
        this.name = name;
        this.email = email;
        this.password_digest = password_digest;
    }

    static findByUserName(username) {
        return db.oneOrNone(`
        SELECT * FROM users WHERE username = $1
        `, username)
        .then(user => {
            if(user) return new this(user);
            throw new Error(`No user with username ${username} found`);
        })
    }

    static getById(id) {
        return db
          .oneOrNone('SELECT * FROM users WHERE id = $1', [id])
          .then((user) => {
            if (user) return new this(user);
            throw new Error(`User ${id} not found`);
          });
      }

    save() {
        return db.one(`INSERT INTO users
        (username, name, email, password_digest)
        VALUES
        ($/username/, $/name/, $/email/, $/password_digest/)
        RETURNING *`, this)
            .then(user => Object.assign(this, user));
    }
}

module.exports = User;