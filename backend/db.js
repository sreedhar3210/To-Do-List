const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://sreedhar:toDoList@cluster0.v3ppk8d.mongodb.net/usersDB?retryWrites=true&w=majority&appName=Cluster0';
const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to the database successfully");

        try {
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
    } catch (error) {
        console.error("Failed to connect to the database:", error);
        return err;
    }
}

module.exports = mongoDB;
