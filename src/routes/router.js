const express = require('express');
const patientRoutes = require('./patientRoutes');
const router = express.Router();

// Use patient routes
router.use('/patients', patientRoutes);

module.exports = router;
