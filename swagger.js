const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Freelance API',
        description: 'Nodejs Express MongoDB Freelance API'
    },
    host: 'http://localhost:3000',
    schemes: ['http'],
};

const outputFile = './swagger-output.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./index.js'); 
});
