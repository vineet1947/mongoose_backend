const mongoose = require('mongoose');

const BootcampSchema = new mongoose.Schema({
 name: {
  type: String,
  required: [true, 'Please add a Name'],
  unique: true,
  trim: true,
  maxlength: [50, 'Name cannot be more than 50 '],
 },
 slug: String,
 description: {
  type: String,
  required: [true, 'Please add a Description'],
  maxlength: [500, 'Descirption cannot be more than 50 chars'],
 },
 website: {
  type: String,
  match: [
   /^(https?|ftp):\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)$/,
   'Please use a valid HTTP or HTTPS URL',
  ],
 },
 phone: {
  type: String,
  required: false,
  unique: false,
  maxlength: [20, 'Phone number cannot be Longer than 20 chars'],
 },
 email: {
  type: String,
  required: true,
  unique: false,
  match: [
   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
   'Please use a valid email address',
  ],
 },
 address: {
  type: String,
  required: true,
 },

 location: {
  type: {
   type: String,
   enum: ['Point'],
   required: false,
  },
  coordinates: {
   type: [Number],
   required: false,
   index: '2dsphere',
  },
  formattedAddress: String,
  street: String,
  city: String,
  state: String,
  zipcode: String,
  country: String,
 },

 careers: {
  type: [String],
  required: true,
  enum: [
   'Web Development',
   'Mobile Development',
   'UI/UX',
   'Business',
   'Other',
   'Data Science',
  ],
 },
 averageRating: {
  type: Number,
  min: [1, 'Rating must be at least 1'],
  max: [10, 'rating must can not be more than 10'],
 },
 averageCost: Number,
 photo: {
  type: String,
  default: 'no-photo.jpeg',
 },
 housing: {
  type: Boolean,
  default: false,
 },
 jobAssistance: {
  type: Boolean,
  default: false,
 },
 jobGuarantee: {
  type: Boolean,
  default: false,
 },

 acceptGi: {
  type: String,
  default: false,
 },
 createdAt: {
  type: Date,
  default: Date.now,
 },
});

module.exports = mongoose.model('Bootcamp', BootcampSchema);
