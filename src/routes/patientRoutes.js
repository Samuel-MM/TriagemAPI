const express = require('express');
const patientController = require('../controllers/patientController');
const router = express.Router();

router.get('/', patientController.getAllPatients);
router.get('/:patientCpf', patientController.getPatientByCpf);
router.get('/history/:patientCpf', patientController.getHistoryByPatientCpf);

router.post('/', patientController.createPatient);
router.post('/createHistory', patientController.createPatientHistory);

module.exports = router;
