const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empId: String,
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Employee', employeeSchema);