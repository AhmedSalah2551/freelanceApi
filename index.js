require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();

const mongoose = require('mongoose');

app.use(express.json());
app.use(cors());

mongoose.connect( process.env.MONGODB_URI || "mongodb+srv://ahmedsalah200155:Freelance123@freelance.dxukl.mongodb.net/?retryWrites=true&w=majority&appName=freelance")
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...'));


const userRoute = require('./routes/user.route');
const serviceRoute = require('./routes/service.route');
const proposalRoute = require('./routes/proposal.route');


app.use('/users' , userRoute);
app.use('/services' , serviceRoute);
app.use('/proposals' , proposalRoute);


app.get('/test' , (req, res)=>{ res.send('server work') });

app.use('/image' , express.static('./tmp'));


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.listen( process.env.PORT || 3000, () => console.log(`Server is running`));

