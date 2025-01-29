const express = require('express');
const signUpRoutes = require('./src/routes/signUp');
const bodyParser = require('body-parser')
const cors = require('cors');
const createAdminAccount = require('./src/scripts/admin/Admin')

const app = express();


const PORT = process.env.port || 5001;


const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5174'],
    credentials: true,
    optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

createAdminAccount();

app.use('/user', signUpRoutes)

app.listen(PORT, () => {
    console.log(`server is running op port: ${PORT}`)
});