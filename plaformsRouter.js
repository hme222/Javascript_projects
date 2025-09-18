const express= require("express");
const router= express.Router();
const uuid= require("uuid").v4;
let platforms= require("../data/platforms")


router.get(("/"), (req,res)=> {
    try {
        const sortByQuery= req.query.sortBy || "name"
        const sortOrderQuery= req.query.sortOrder || "asc"
        const sortedData= sort(platforms, sortByQuery, sortOrderQuery)
        res.json({
            message: "Success",
            payload: sortedData
        })
    } catch (error) {
        res.json({
            message: "ERROR",
            payload: error.message
        })
    }
})


module.exports=router