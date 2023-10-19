const express = require('express')
const app = express();
const studentsRouter = require('./src/students/route')
require('dotenv').config()


app.use(express.json())
app.get('/',(req,res) => {
    res.send("Hello ,  world")
})

app.use('/api/v1/students',studentsRouter)
 
const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`server is listen to port ${port}`);
})