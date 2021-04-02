const express = require('express');
const dotenv = require('dotenv');


/// load env vars

dotenv.config({ path: './config/config.env'});

const app = express();


// route creation 
app.get('/api/v1/bootcamps', (req, res)=> {
res.status(200).json({ sucess: true, msg: "Get route request is working => show all" });
})
app.get('/api/v1/bootcamps/api', (req, res)=> {
res.status(200).json({ sucess: true, msg: `Get result ${req.params.id}` });
})
app.post('/api/v1/bootcamps', (req, res)=> {
res.status(200).json({ sucess: true, msg: "Post route request is working => Creat someting "})
})

// Put is for updating
app.put('/api/v1/bootcamps/:id', (req, res)=> {
res.status(200).json({ sucess: true, msg: `Post route request is working => Display something ${req.params.id}`})
})
app.delete('/api/v1/bootcamps/:id', (req, res)=> {
res.status(200).json({ sucess: true, msg: `Delete result ${req.params.id}` });
})

const PORT = process.env.PORT 

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));