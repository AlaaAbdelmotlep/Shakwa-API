const mongoose = require("mongoose");
const autoIncrement = require("mongoose-sequence")(mongoose);

const schema = new mongoose.Schema(
  {
    _id: Number,
    type_id: {
      type: Number,
      ref: "report_list",
    },
    report_lat: {
      type: Number,
    },
    report_long: {
      type: Number,
    },
    reportFile: [
      {
        type: String,
      },
    ],
    report_description: {
      type: String,
    },
  },
  { _id: false }
);

schema.plugin(autoIncrement, { id: "report_content", inc_field: "_id" });
module.exports = mongoose.model("report_content", schema);
