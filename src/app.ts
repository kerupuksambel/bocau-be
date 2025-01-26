
import dotenv from 'dotenv';
import express from 'express'
import router from './routes';

dotenv.config()
const app = express();

app.use(router)
