import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import configViewEngine from "./config/ConfigEngine";
import routeService from './routes/web';

// express app instance
const app = express();

// config view engine
configViewEngine(app);

// routing service
routeService(app);

// app listens on...
app.listen(process.env.RUN_APP_PORT, (req, res) => {
    console.log(`App Listening on ${process.env.APP_HOST} port: ${process.env.RUN_APP_PORT} `);
})

