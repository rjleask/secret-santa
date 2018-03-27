const db = require("../models");
module.exports = {
  getUser: (req, res) => {
    db.User.findAll({}).then(result => res.json(result));
  },
  getUniqueUser: (req, res) => {
    db.User.findOne({
      where: {
        id: req.session.passport.user
      }
    })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateCookie: (req, res) => {
    db.User.update(
      {
        userCookie: req.body.userCookie
      },
      {
        where: {
          username: req.body.username
        }
      }
    )
      .then(dbModey => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
