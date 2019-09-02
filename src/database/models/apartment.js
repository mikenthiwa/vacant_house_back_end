import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const apartmentSchema = new Schema({
  buildingName: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  numberOfRooms: {
    type: Number,
    required: true,
  },
  apartmentImage: {
    type: String,
  }
});

module.exports = mongoose.model('Apartment', apartmentSchema);
