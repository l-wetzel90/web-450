const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  empId: {
    type: String,
    unique: true,
    dropDups: true,
    required: true
  },
  firstName: String,
  lastName: String
});

module.exports = mongoose.model('Employee', employeeSchema);
