const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {type: String, trim: true, required: true},
    email: {type: String, trim: true, required: true},
    password: {type: String, trim: true, required: true}
  },
  { timestamps: true }
  );

userSchema.statics.checkEmailExists = async (email) => {
  const doc = await mongoose.model('User').findOne({email: email}).exec();
  return doc;
};

userSchema.statics.login = async (email, password) => {
  const doc = await mongoose.model('User').findOne({email: email, password: password}).exec();

  return doc;
}

module.exports = mongoose.model('User', userSchema);
