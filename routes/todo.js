const express = require('express');
const router = express.Router();
//import controller
const {createTodo} = require("../controller/createTodo");
const {getTodo,getTodobyId} = require("../controller/getTodo");
const {updateTodo} = require("../controller/updateTodo");
const {deleteTodo} = require("../controller/deleteTodo");

//define API router
router.post("/createTodo",createTodo);
router.get("/getTodos",getTodo);
router.get("/getTodos/:id",getTodobyId);
router.put("/updateTodos/:id",updateTodo);  
router.delete("/deleteTodos/:id",deleteTodo);

module.exports=router;