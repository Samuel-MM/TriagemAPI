const { where } = require("sequelize");
const Patient = require("../models/PatientModel");
const databases = require("../config/database");
const validateCpf = require("../validations/patientValidations");
const getAllPatients = async (req, res) => {
    try {
        const patients = await Patient.findAll();
        return res.status(200).json(patients);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const getPatientByCpf = async (req, res) => {
    try {
        const cpf = req.params.patientCpf;
        const patient = await Patient.findOne({
            where: { cpf }
        })
        return res.status(200).json(patient);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

const createPatient = async (req, res) => {
    try {
        await Patient.create({ ...req.body });
        return res.status(200).json('Patient created');
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

const createPatientHistory = async (req, res) => {
    try {
        const { cpf } = req.body;

        validateCpf(cpf);

        const triagemCollection = databases.mongoose.connection.collection('triagem');
        const document = {
            ...req.body,
            date: new Date()
        };

        const result = await triagemCollection.insertOne(document);
        return res.status(200).json('History created');
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

const getHistoryByPatientCpf = async (req, res) => {
    try {
        const cpf = req.params.patientCpf;
        validateCpf(cpf);
        const triagemCollection = databases.mongoose.connection.collection('triagem');
        const documents = await triagemCollection.find({ cpf }).sort({ date: -1 }).toArray();
        return res.status(200).json(documents);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
}

module.exports = {
    getAllPatients,
    getPatientByCpf,
    createPatient,
    createPatientHistory,
    getHistoryByPatientCpf
};
