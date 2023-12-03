const express = require('express');
const {
 getBootcamps,
 getBootcamp,
 createBootcamp,
 updateBootcamps,
 deleteBootcamps,
} = require('../controllers/bootcamps');

const router = express.Router();

router.route('/').get(getBootcamps).post(createBootcamp);
router
 .route('/:id')
 .get(getBootcamp)
 .post(createBootcamp)
 .put(updateBootcamps)
 .delete(deleteBootcamps);
module.exports = router;