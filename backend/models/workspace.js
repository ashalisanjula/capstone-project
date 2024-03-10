const mongoose = require('mongoose');
const { Schema } = mongoose;

const workspaceSchema = new Schema(
  {
    name: {type: String, trim: true, required: true},
    userId: {type: String, trim: true, required: true}
  },
  { timestamps: true }
  );


module.exports = mongoose.model('Workspace', workspaceSchema);