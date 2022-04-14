const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ApprovedSchema = new Schema({
  status: {
    type: String,
    enum: ['Approved', 'Rejected']
  },
  applicant: {
    type: Schema.Types.ObjectId,
    ref: 'Application'
},
});

module.exports = mongoose.model("Approve", ApprovedSchema);
