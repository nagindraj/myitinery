const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// create schema

const ItinerarySchema = new Schema({
    city: String,
    title: String,
    name: String,
    profilePic: String,
    rating: Number,
    duration: Number,
    price: String,
    hashtag: Array,
    userId: Number
});

const itineraryModel = mongoose.model("itinerary", ItinerarySchema, "itinerary" ); 

module.exports = itineraryModel;