const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    firstname: String,
    lastname: String,
    email: { type: String, unique: true },
    password: String,
    image: {
        type: String,
        default: "https://t3.ftcdn.net/jpg/08/79/30/74/360_F_879307431_XGlf059p2rLPAlIkWWPg3CMUVJAaxG13.jpg"
    }

})

module.exports = mongoose.model('User' , userSchema );