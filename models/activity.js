const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const activitiesSchema = new Schema({ name: String, image: String, userId:Number });

const ActivitiesModel = mongoose.model('Activities', activitiesSchema);

module.exports = ActivitiesModel;