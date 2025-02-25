const express = require('express');
require('./config/connect');

const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());


const userRoute = require('./routes/user.route');
const serviceRoute = require('./routes/service.route');
const proposalRoute = require('./routes/proposal.route');


app.use('/users' , userRoute);
app.use('/services' , serviceRoute);
app.use('/proposals' , proposalRoute);


app.get('/test' , (req, res)=>{ res.send('server work') });

app.use('/image' , express.static('./public'));

app.listen(8080 || process.env.PORT, ()=>{
    console.log('server work');
})

