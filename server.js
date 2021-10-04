import express from 'express'
import mongoose from 'mongoose'
import Videos from './dbModel.js'
import Cors from 'cors'

//App Config
const app = express()
const port = process.env.PORT || 9000
const connection_url = 'mongodb+srv://<user>:<password>@<cluster>.onmdo.mongodb.net/<database>?retryWrites=true&w=majority'

//Middleware
app.use(express.json())
app.use(Cors())

//DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    autoIndex: true
})

//API Endpoints
app.get("/",(req,res)=>res.status(200).send("Running"))
app.post('/v2/posts', (req,res) =>{
    const dbVideos = req.body
    Videos.create(dbVideos, (err,data)=>{
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})
app.get('/v2/posts',(req,res)=>{
    Videos.find((err,data)=>{
        if(err)
            res.status(500).send(err)
        else
            res.status(201).send(data)
    })
})

//Listener
app.listen(port,()=> console.log(`Listening on localhost: ${port}`))