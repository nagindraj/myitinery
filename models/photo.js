var mongoose = require('mongoose'); 
const PhotoSchema = new mongoose.Schema(
  { 
    img: { 
        data: Buffer, 
        contentType: String 
    }
  }
);
mongoose.model('Photos', PhotoSchema);

module.exports = mongoose.model('Photos');