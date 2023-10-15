const express = require('express')
const app = express();
const port = 3000;
const studentsRouter = require('./src/students/route')

app.use(express.json())
app.get('/',(req,res) => {
    res.send("Hello , world")
})

app.use('/api/v1/students',studentsRouter)

app.listen(port,()=>{
    console.log(`server is listen to port ${port}`);
})