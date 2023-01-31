const { Biodata } = require('../models');

const biodataController = {
    getBiodata: async (req, res) => {
        try {
            const response = await Biodata.findAll();
            res.status(200).json({
                status: 'success',
                data,
            });
        } catch (error) {
            console.log(error.message);
        }
    },
    getBiodataById: async (req, res) => {
        try {
            const response = await Biodata.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                status: 'success',
                data,
            });
        } catch (error) {
            console.log(error.message);
        }
    },
    createBiodata: async (req, res) => {
        try {
            const response = await Biodata.create(req.body);
            res.status(201).json({
                msg: `Biodata Created`,
                data,
            });
            // res.render('signUp-detail',{title: 'Detail Regitrasi'})
        } catch (error) {
            console.log(error.message);
        }
    },
    updateBiodata: async (req, res) => {
        // const { Biodataname,password } = req.body;
        try {
            const response = await Biodata.update(req.body,
             {
                where: {
                    id: req.params.id
                }
            });
            res.status(202).json({
                msg: `Biodata Updated!!!`,
                data,
        });
        } catch (error) {
            console.log(error.message);
        }
    },
    deleteBiodata: async (req, res) => {
        try {
            const response = await Biodata.destroy(
             {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({
                msg: `User Deleted!!!`,
                data,
            });
        } catch (error) {
            console.log(error.message);
        }
    }
    
}



module.exports = biodataController;