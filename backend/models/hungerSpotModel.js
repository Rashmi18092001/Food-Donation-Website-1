const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// hunger spot schema
const HUngerSpotSchema = new Schema({
  name : String,
  address : String,
  contact : Number
});

module.exports = HungerSpot = mongoose.model('HungerSpotDetails', HUngerSpotSchema)