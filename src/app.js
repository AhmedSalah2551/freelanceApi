require('dotenv').config();
const express = require('express');
const cors = require('cors')
const app = express();

const mongoose = require('mongoose');

app.use(express.json());

const corsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'http://localhost:4200',
      'http://localhost:3000',
      'https://freelancers-market.netlify.app',
      'https://beautiful-bunny-802c23.netlify.app'
    ];
    
    if (!origin || allowedOrigins.includes(origin) || origin.endsWith('.netlify.app')) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Handle preflight for all routes

// Middleware to ensure DB connection
app.use(async (req, res, next) => {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(process.env.MONGODB_URL || process.env.MONGODB_URI || "mongodb://ahmed:Aa123456789@ac-peccnqs-shard-00-00.fylokkl.mongodb.net:27017,ac-peccnqs-shard-00-01.fylokkl.mongodb.net:27017,ac-peccnqs-shard-00-02.fylokkl.mongodb.net:27017/?ssl=true&replicaSet=atlas-2w2q6p-shard-0&authSource=admin&appName=freelance-market");
      console.log('Connected to MongoDB...');
    } catch (err) {
      console.error('Could not connect to MongoDB...', err.message);
      return res.status(500).json({ message: 'Database connection failed' });
    }
  }
  next();
});


const userRoute = require('../routes/user.route');
const serviceRoute = require('../routes/service.route');
const proposalRoute = require('../routes/proposal.route');


app.use('/users' , userRoute);
app.use('/services' , serviceRoute);
app.use('/proposals' , proposalRoute);


app.get('/test' , (req, res)=>{ res.send('server work') });

app.use('/image' , express.static('./tmp'));


const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../swagger-output.json');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = app;

// app.listen( process.env.PORT || 3000, () => console.log(`Server is running`));

