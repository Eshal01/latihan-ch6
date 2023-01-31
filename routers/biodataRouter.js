const express = require('express');
const biodataController = require('../controller/biodataController')
const biodata = express.Router();

biodata.get('/biodata', biodataController.getBiodata);
biodata.get('/biodata/:id', biodataController.getBiodataById);
biodata.post('/biodata', biodataController.createBiodata);
biodata.put('/biodata/:id', biodataController.updateBiodata);
biodata.delete('/biodata/:id', biodataController.deleteBiodata);


module.exports = biodata;