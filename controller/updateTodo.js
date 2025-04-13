const Todo = require("../models/Todo");

exports.updateTodo = async (req, res) => {
    try {
        const { id } = req.params; 
        const { title, description } = req.body;

        
        const updatedTodo = await Todo.findByIdAndUpdate(
            id, 
            { title, description, updatedAt: Date.now() }, 
            { new: true, runValidators: true } 
        );

        if (!updatedTodo) {
            return res.status(404).json({ message: "Todo not found" });
        }

        res.status(200).json(updatedTodo); 
    } catch (err) {
        res.status(500).json({ error: err.message }); // Send an error response
    }
};
