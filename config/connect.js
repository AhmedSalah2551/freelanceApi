const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://ahmedsalah200155:Freelance123@freelance.dxukl.mongodb.net/?retryWrites=true&w=majority&appName=freelance')
    .then(
        ()=>{
            console.log('connected to db');
            
        }
    )
    .catch(
        (err)=>{
            console.log(err);
        }
    )