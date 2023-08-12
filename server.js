const express = require('express');
const path = require('path');
  
const app = express();
const PORT = 5000;

const buildPath = path.join(__dirname, 'client/build')
app.use('/', express.static(buildPath))
  
app.listen(PORT, (error) =>{
    if(!error)
        console.log("Server is Successfully Running, and App is listening on port "+ PORT)
    else 
        console.log("Error occurred, server can't start", error);
    }
);