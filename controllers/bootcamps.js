const BootCamp = require('../models/Bootcamp');
const ErrorResponse = require('../utils/errorResponse');

// @desc  Get all The Bootcamps
// @route GET/api/v1/bootcamps
// @access  Public

exports.getBootcamps = async (req, res, next) => {
 try {
  const bootcamps = await BootCamp.find();
  res.status(200).json({
   success: true,
   count: bootcamps.length,
   data: bootcamps,
  });
 } catch (err) {
  next(err);
 }
};

// @desc  Get single  Bootcamps
// @route GET/api/v1/bootcamps:id
// @access  Public

exports.getBootcamp = async (req, res, next) => {
 try {
  const bootcamp = await Bootcamp.findById(req.params.id);
  if (!bootcamp) {
   return next(
    new ErrorResponse(`Bootcamp not found with the id : ${req.params.id}`, 404)
   );
  }
  res.status(200).json({
   success: true,
   data: bootcamp,
  });
 } catch (err) {
  next(err);
 }
};

// @desc  Post new Bootcamps
// @route POST /api/v1/bootcamps/
// @access  Public

exports.createBootcamp = async (req, res, next) => {
 try {
  const bootcamp = await BootCamp.create(req.body);
  res.status(201).json({
   success: true,
   count: bootcamp.length,
   data: bootcamp,
  });
 } catch (err) {
  next(err);
 }
};

// @desc  Udpdate a  Bootcamps
// @route PUT /api/v1/bootcamps/:id
// @access  Public

exports.updateBootcamps = async (req, res, next) => {
 try {
  const bootcamp = await BootCamp.findByIdAndUpdate(req.params.id, req.body, {
   new: true,
   runValidators: true,
  });
  if (!bootcamp) {
   return next(
    new ErrorResponse(`Bootcamp not found with the id : ${req.params.id}`, 404)
   );
  }
  res.status(200).json({
   success: true,
   data: bootcamp,
  });
 } catch (err) {
  next(err);
 }
};

// @desc  delete a Bootcamps
// @route DELETE /api/v1/bootcamps/:id
// @access  Public

exports.deleteBootcamps = async (req, res, next) => {
 try {
  const bootcamp = await BootCamp.findByIdAndDelete(req.params.id);
  if (!bootcamp) {
   return next(
    new ErrorResponse(`Bootcamp not found with the id : ${req.params.id}`, 404)
   );
  }
  res.status(200).json({
   success: true,
   count: bootcamp.length,
   data: {},
  });
 } catch (err) {
  next(err);
 }
};
