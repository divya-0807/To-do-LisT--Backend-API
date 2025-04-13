const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 50,
    },
    description: {
        type: String,
        required: true,
        maxLength: 50,
    },
    createdAt: {
        type: Date,
        required: true,
        default: Date.now, // ✅ Fix: Remove ()
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now, // ✅ Fix: Remove ()
    },
});

module.exports = mongoose.model("Todo", todoSchema);
