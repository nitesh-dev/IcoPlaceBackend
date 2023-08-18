import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import MongoAPI from './mongo/index.js'

dotenv.config()

const atlas = process.env.ATLAS_URI || '';
const port = process.env.EXPRESS_PORT || 3001
// const tokenKey = process.env.TOKEN_KEY || 'test'

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// connection to mongo db
const mongoApi = new MongoAPI()
// let isMongoConnected = await mongoApi.connectMongoose(atlas)



// ----------------------- request --------------------------

app.get('/', (req, res) => {
  res.send('Hello welcome back! Server is working')
})




app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
