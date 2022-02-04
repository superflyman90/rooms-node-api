import express from 'express';
import './config/dbConfig.js';
import routes from './routes/routes.js'
import dotenv from 'dotenv';
dotenv.config();
// import bodyParser from 'body-parser';

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());

app.use(routes);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));