const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sreedhar:toDoList@cluster0.v3ppk8d.mongodb.net/usersDB?retryWrites=true&w=majority&appName=Cluster0';

//seperate function for connecting to database 
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database successfully");
    } catch(error){
        console.log("failed to connect to database");
        throw error;
    }
}

const fetchData = async () => {
    try {
        await mongoDB();
        const fetched_data = await mongoose.connection.db.collection('users');
        //console.log("fetched data: " + fetched_data);
        //gives error because the left operator is a string and right operator is an object.
        //so we use the below convention
        //console.log("Fetched data:", fetched_data);

        const data = await fetched_data.find({}).toArray();
        return data;
        console.log("Data:", data); // Log the data array
    } catch (err) {
        console.error("Error fetching data:", err);
        throw err;
    }
}

const insertData = async (data) => {
    try {
        await mongoDB();

        const usersCollection = mongoose.connection.db.collection('users');
        //this could only insert one user at a time
        //(it is not required for inserting multiple users at same time).
        const result = await usersCollection.insertOne(data);
        console.log("Inserted document with ID:", result.insertedId);
        return { _id: result.insertedId, ...data };
    } catch (error) {
        console.error("Failed to insert data:", error);
        throw error;
    }
}

module.exports = {fetchData, insertData};
