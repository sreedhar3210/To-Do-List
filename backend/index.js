const express = require('express');
const mongoDB = require('./db');

const port = 5000;
const app = express();

mongoDB();
app.get("", (req, res)=>{
    res.send("succesfully connected backend");
});

app.listen(port,()=>{
    console.log("listening at the port " + port);
});