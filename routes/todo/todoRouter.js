const express = require('express');
const router = express.Router();
const { getAllTodo } = require("./controller/todoController");
const { createTodo } = require("./controller/todoController");
const { deleteTodo } = require("./controller/todoController");
const { updateTodo } = require("./controller/todoController");

//GET request
router.get('/',function(req,res,next){
    // res.send("todo");
    getAllTodo({})
    .then((payload)=>{
        res.json({message: "success", payload});
    })
    .catch((error)=>{
        res
        .status(500)
        .json({message: "Failure", error: error.message});
    })
});

//POST request
router.post('/create-todo',(req,res)=>{
    createTodo(req.body)
    .then((payload)=>{
        res.json({message: "Success", payload});
    }).catch((error)=>{
        res
        .status(500)
        .json({message: "Failure", error: error.message});
    })
});

//DELETE request
router.delete('/delete-todo-by-id/:id',(req,res)=>{
    const {id} = req.params;
    deleteTodo(id)
    .then((payload)=>{
        res.json({message: "Deleted", payload});
    })
    .catch((error)=>{
        res
        .status(500)
        .json({message: "Not Deleted", error: error.message});
    })
});

//UPDATE request
router.put('/update-todo-by-id/:id',(req,res)=>{
    const {id} = req.params;
    updateTodo(id,req.body)
    .then((payload)=>{
        res.json({message: "Updated", payload});
    })
    .catch((error)=>{
        res.json({message: "Not Update try again!", message: error.message});
    })
});

module.exports = router;