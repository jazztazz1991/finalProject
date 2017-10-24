const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAll: function (req, res) {
    if (req.session) {
      db.House
        .find(req.query)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  findById: function (req, res) {
    if (req.user) {
      db.House
        .findById(req.params.id)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  create: function (req, res) {
    if (req.user) {
      db.House
        .create(req.body)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  update: function (req, res) {
    if (req.user) {
      db.House
        .findOneAndUpdate({ _id: req.params.id }, req.body)
        .then(dbModel => res.json({results: dbModel, sess: req.session}))
        .catch(err => res.status(422).json(err));

    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  },
  remove: function (req, res) {
    if (req.user) {
      db.House
        .findById({ _id: req.params.id })
        .then(dbModel => dbModel.remove())
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
    else { res.json({ error: "Please login", statusCode: 401 }) }
  }
};
