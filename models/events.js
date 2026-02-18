const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  _id: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  name: String,
  email: String,
  photo: String,
  username: String,
});
