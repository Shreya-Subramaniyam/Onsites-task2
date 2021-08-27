const mongoose = require('mongoose');

const urlschema = mew mongoose.Schema({
  Ucode: String,
  longU: String,
  shortU: String,
  date: { type: String,
          default: Date.now
        }
});

module.exports = mongoose.model('url', urlschema);
