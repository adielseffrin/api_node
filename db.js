var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://dbUser:dbUserPassword@apitest.71vsr.mongodb.net/apitestdata?retryWrites=true&w=majority';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
var conn = mongoose.connection;
conn.on('error', console.error.bind(console, 'MongoDB connection error:'));
 
var studentSchema = new mongoose.Schema({
    name: String,
    email: String
}, { collection: 'students' }
);
 
module.exports = { Mongoose: mongoose, StudentSchema: studentSchema }