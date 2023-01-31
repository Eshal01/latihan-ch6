const passport = (req, res, next) => {
    const error = {
        status: "fail",
        message: null
    }
    const { username, password } = req.body;
    if (username === "mahardika") {
        if (password === "123123") {
            next();
        } else {
            error.message = "password tidak sesuai!"
            res.status(401).json(error);
        }
    } else {
        error.message = "Username tidak terdaftar!"
        res.status(401).json(error);
    }
};

module.exports = passport;