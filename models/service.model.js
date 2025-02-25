const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({

    name: String,
    categorie: String,
    location: String,
    salary: Number,
    description: String,
    image: {
        type: String,
        default: "https://i.postimg.cc/kg0PyHnB/1735162364672.jpg"
    },
    idUser : { type: mongoose.Schema.Types.ObjectId , ref : 'User' }

})


module.exports = mongoose.model('Service' , serviceSchema);