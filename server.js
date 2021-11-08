const express = require('express')
const mongoose = require('mongoose')
const env = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors');
const app = express()
env.config();

const PORT = process.env.PORT || 5000

const userRoute = require('./router/userrouter')



app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user', userRoute)

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to database'))
  .catch(() => console.log('Failed to connect to database.'));



app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`)
})

