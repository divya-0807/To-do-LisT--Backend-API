const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 4888;

// Middleware to  parse json request body
app.use(express.json());

// Import and connect to the database
const Dbconnect = require("./config/database");
Dbconnect(); // Call the function to establish DB connection

// Import routes
const todoRoutes = require("./routes/todo");

// Mount the Todo API routes
app.use("/api/v1", todoRoutes); // ✅ Fixed missing '/'

// Default route taaki kuch dikh jaaaye ui par
app.get("/", (req, res) => {
    res.send(`<h1>Yeh homepage hai</h1>`);
});

// Start server after DB is connected
app.listen(PORT, () => {
    console.log(`App is successfully started at ${PORT}`);
});
