const db = require("../models/index");
const Tutorial = db.listingsAndReviews;

exports.findAll = (req, res) => {
  // const name = req.query.name;
  // var condition = name ? { name: { $regex: new RegExp(name), $options: "i" } } : {};

  Tutorial.find({})
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.create = (req, res) => {
  // Validate request
  // if (!req.body.action) {
  //   res.status(400).send({
  //     message: "Content can not be empty!"
  //   });
  //   return;
  // }

  // Create a Tutorial
  // const tutorial = {
  //   title: req.body.title,
  //   description: req.body.description,
  //   published: req.body.published ? req.body.published : false
  // };

  // Save Tutorial in the database
  console.log(req.body);
  const task = new Tutorial(req.body)

  try {
      task.save()
      res.status(201).send(task)
  } catch (e) {
      res.status(400).send(e)
  }
  // Tutorial.create(req.body)
  //   .then(data => {
  //     // data = req.body.action;
  //     data = {
  //       "_id":'1',
  //       // action:1,
  //       "_v":req.body.schemaCreate
  //     }
  //     console.log("data:"+JSON.stringify(data))
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: err.message || "Some error occurred while creating the Tutorial."
  //     });
  //   });
};