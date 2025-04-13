const Todo =require("../models/Todo");

exports.getTodo = async(req,res)=>{
    try{
        //fetch all  todo from db
        //ccreate find on find by id find 
        const todos  = await Todo.find({});

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"data is fetched",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"data is not fetched",
        });
    }
}

exports.getTodobyId = async(req,res)=>{
    try{
        //fetch all  todo from db
        //ccreate find on find by id find 
        const id = req.params.id;
        const todo  = await Todo.findById({_id : id});

        //error  aagyaa 
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"data not found"
            })
        }
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:"data is fetched",
        })
    }
    catch(err){
        console.error(err);
        res.status(500)
        .json({
            success:false,
            error:err.message,
            message:"data is not fetched",
        });
    }
}