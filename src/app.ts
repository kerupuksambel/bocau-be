
import dotenv from 'dotenv';
import express from 'express'
import router from './routes';

dotenv.config()
const app = express();

app.use('/api', router)
// app.get('/', (req, res) => {
//     res.send('Hello World!')
// })

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port ${process.env.PORT || 3000}`)
})