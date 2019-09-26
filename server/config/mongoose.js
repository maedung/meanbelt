const mongoose = require("mongoose");
var server = mongoose.connect("mongodb://localhost/meantest3", {useNewUrlParser: true});
module.exports = server;