const { Schema, model, MongooseError } = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
    match: [/@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/, 'Invalid Email Address'],
    minLength: [10, 'Email should be at least 10 characters'],
  },
  password: {
    type: String,
    required: true,
    match: [/^[a-zA-Z0-9]+$/, 'Password must be alphanumeric'],
    minLength: 6,
  },
});

userSchema.pre("save", async function () {

  const hash = await bcrypt.hash(this.password, 12);

  this.password = hash;
});

userSchema.virtual('rePassword')
.set(function(value) {
  if (value !== this.password) {
    throw new MongooseError(`Password mismatch!`)
  }
});

const User = model("User", userSchema);

module.exports = User;
