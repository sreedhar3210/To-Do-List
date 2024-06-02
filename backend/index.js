const express = require('express');
const mongoDB = require('./db');
const cors = require('cors');

const port = 5000;
const app = express();


app.use(
    cors({
        origin: 'http://192.168.31.66:3000',
    })
)

//mongoDB();
app.get("", (req, res)=>{
    res.send("succesfully connected backend");
});

app.get("/api/users", async (req, res) => {
    try {
        const data = await mongoDB();
        res.json(data); // Send the data as JSON
        console.log('returned data succesfully');
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user data' }); // Send error response
    }
});

app.listen(port,()=>{
    console.log("listening at the port " + port);
});