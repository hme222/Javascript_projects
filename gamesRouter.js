const express= require("express");
const router= express.Router();
let games= require("../data/games")
const uuid= require("uuid").v4;

const sort= require("./utils");

router.get(("/"), (req,res)=> {
    try {
        const sortByQuery= req.query.sortBy || "name"
        const sortOrderQuery= req.query.sortOrder || "asc"
        const sortedData= sort(games, sortByQuery, sortOrderQuery)
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

router.get(("/:id"), (req,res) => {
    try {
        let gamesData= games.find((games) => games.id === req.params.id)
        res.json({
            message: "success",
            payload: gamesData
        })
    } catch (error) {
        res.json({ 
            message: "ERROR", 
            payload: error.message
        })
    }
})

router.post(("/"), (req,res) => {
    try {
        const newGame= {
            title: req.body.title,
            releaseYear: req.body.releaseYear,
            genres: req.body.genres,
            platforms: req.body.platforms
}
        games.push(newGame);
        res.json({
            message: "success"
        })
    } catch (error) {
        res.json({ 
            message: "ERROR", 
            payload: error.message
        })
    }
})

router.put(("/:id"), (req,res)=> {
    try {
    let gamesData= games.find((game) => game.id === req.params.id)
     if(gamesData) {
        Object.assign(gamesData, req.body)
        res.json({
        message: "success",
        payload: gamesData
     })
     }
    } catch (error) {
         res.json({ 
            message: "ERROR", 
            payload: error.message
        })
    }
})

router.delete(("/:id"), (req,res) => {
    let gamesData= games.find((game) => game.id === req.params.id)
    try {
        let deleteData= gamesData.filter((game) => game.id !== req.params.id)
        games=deleteData
        console.log(gamesData)
        res.json({
            message: "Success",
            payload: `${gamesData.title} successfully deleted.`
        })
    } catch (error) {
        res.status(404).json({
            message: "Error",
            payload: `Game ${gamesData} is not found.`
        })
    } 
})


module.exports= router
