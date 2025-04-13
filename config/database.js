const mongoose = require("mongoose");
require("dotenv").config();

const Dbconnect = () => {
    console.log("DATABASE_URL from .env:", process.env.DATABASE_URL);

    if (!process.env.DATABASE_URL) {
        console.error("DATABASE_URL is not defined. Check your .env file.");
        process.exit(1);
    }

    mongoose.connect(process.env.DATABASE_URL)
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.error("Could not connect to MongoDB", err);
        process.exit(1); // Exit the process on failure
    });
};

module.exports = Dbconnect;
