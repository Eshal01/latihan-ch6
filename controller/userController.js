const { User } = require('../models');

const userController = {
    getUsers: async (req, res) => {
        try {
            const response = await User.findAll();
            res.status(200).json(response);
        } catch (error) {
            console.log(error.message);
        }
    },
    getUserById: async (req, res) => {
        try {
            const response = await User.findOne({
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json(response);
        } catch (error) {
            console.log(error.message);
        }
    },
    createUser: async (req, res) => {
        const { username,password } = req.body;
        try {
            const response = await User.create(req.body);
            // res.status(201).json({msg: `User Created`});
            res.render('signUp-detail',{title: 'Detail Regitrasi'})
        } catch (error) {
            console.log(error.message);
        }
    },
    updateUser: async (req, res) => {
        // const { username,password } = req.body;
        try {
            const response = await User.update(req.body,
             {
                where: {
                    id: req.params.id
                }
            });
            res.status(202).json({msg: `User Updated!!!`});
        } catch (error) {
            console.log(error.message);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const response = await User.destroy(
             {
                where: {
                    id: req.params.id
                }
            });
            res.status(200).json({msg: `User Deleted!!!`});
        } catch (error) {
            console.log(error.message);
        }
    }
    
}



module.exports = userController;