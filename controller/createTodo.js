// Import schema
const Todo = require("../models/Todo");

// Route handler
exports.createTodo = async (req, res) => {
    try {
        // Extract title and description from req body
        const { title, description } = req.body;

        // Validate input
        if (!title || !description) {
            return res.status(400).json({
                success: false,
                message: "Title and description are required",
            });
        }

        // Create the new Todo entry
        const response = await Todo.create({ title, description });

        // Send a JSON response with success flag
        res.status(201).json({
            success: true,
            data: response,
            message: "Entry Created Successfully",
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({
            success: false,
            message: "Internal Server Error",
        });
    }
};
