const express = require("express");

const port = 5000;
const app = express();

app.get("", (req, res)=>{
    res.send("succesfully connected backend");
});

app.listen(port,()=>{
    console.log("listening at the port " + port);
});