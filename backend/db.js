const mongoose = require("mongoose");
const uri =
  "mongodb+srv://Motion:MM%402024@users.jxi7k.mongodb.net/?retryWrites=true&w=majority&appName=Users";
mongoose.connect(uri);

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  height: Number,
  weight: Number,
  gender: String,
});

const Users = mongoose.model("Users", userSchema);

module.exports = {
  Users,
};
