const { connect, connection } = require("mongoose");

const MONGODB_URI = 
process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB";

connect(connectionString);

module.exports = connection;
