const db = require("../models/index");
const Protos = db.protos;

exports.findAll = (req, res) => {
  // const name = req.query.name;
  // var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};
  Protos.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving "
      });
    });
};

exports.create = (req, res) => {
  // Save Protos in the database
  console.log(req.body);
  const task = new Protos(req.body)
  try {
      task.save()
      res.status(201).send(task)
  } catch (e) {
      res.status(400).send(e)
  }
};