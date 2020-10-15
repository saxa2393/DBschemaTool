const dbConfig = require("../db.config");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
console.log(db.url)
db.listingsAndReviews = require("./tutorial.model")(mongoose);

module.exports = db;