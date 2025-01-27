
import dotenv from 'dotenv';
import express from 'express'
import router from './routes';
import cors from 'cors';

dotenv.config()
const app = express();

// Global middleware for API
app.use(express.json());
app.use(cors())
// app.use(bodyParser.json());

app.use('/api', router)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`)
})