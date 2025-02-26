const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Freelance API',
        description: 'Nodejs Express MongoDB Freelance API'
    },
    host:  [
        { url: "http://localhost:3000" },
        { url: "https://freelance-api-pi.vercel.app/api" } 
    ],

    schemes: ['https'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js'); 
});
