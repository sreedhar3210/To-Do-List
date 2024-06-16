const express = require('express');
const {fetchData, insertData} = require('./db');
const cors = require('cors');

const port = 5000;
const app = express();


app.use(
    cors({
        origin: 'http://192.168.31.66:3000',
    })
);
app.use(express.json())     //to parse json objects or variables.

//mongoDB();
app.get("", (req, res)=>{
    res.send("succesfully connected backend");
});

app.get("/api/users", async (req, res) => {
    try {
        const data = await fetchData();
        res.json(data); // Send the data as JSON
        console.log('returned data succesfully');
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user data' }); // Send error response
    }
});

app.post("/api/users", async(req,res) => {
    try{
        //this req contains the data sent through the axios post /api/users request.
        //res will be returning the data to that axios post /api/users request.
        const data = await insertData(req.body);
        res.json(data);
        console.log('data inserted succesfully');
    } catch(error){
        res.status(500).json({ error: 'Failed to insert user data' });
    }
});

app.listen(port,()=>{
    console.log("listening at the port " + port);
});