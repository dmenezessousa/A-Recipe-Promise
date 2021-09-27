const express = require("express");
const router = express.Router();
const { getAllRecipe } = require("./controller/recipeController");
const { createRecipe } = require("./controller/recipeController");
const { deleteRecipe } = require("./controller/recipeController");
const { updateRecipe } = require("./controller/recipeController");

//GET request
router.get("/",function(req,res){
    getAllRecipe({})
    .then((payload)=>{
        res.json({message: "success", payload});
    })
    .catch((error)=>{
        res.json({message: "Could not get tru again!", error: error.message});
    })
});

//POST request
router.post("/create-recipe",function(req,res){
    createRecipe(req.body)
    .then((payload)=>{
        res.json({message: "Created", payload});
    })
    .catch((error)=>{
        res.json({message: "could not create", error: error.message});
    })
});

//DELETE request
router.delete("/delete-recipe-by-id/:id",function(req,res){
    const { id } = req.params;
    deleteRecipe(id)
    .then((payload)=>{
        res.json({message: "Deleted", payload});
    })
    .catch((error)=>{
        res.json({message: "Could not delete", error: error.message});
    })
});

//UPDATE request
router.put("/update-recipe-by-id/:id",function(req,res){
    const { id } = req.params;
    updateRecipe(id,req.body)
    .then((payload)=>{
        res.json({message: "Updated", payload});
    })
    .catch((error)=>{
        res.json({message: "Could not update", error: error.message});
    })
});

module.exports = router;