const express= require("express");
const app= express();
const logger= require("morgan");
const PORT= 3000;


app.use(express.json());
app.use(logger("dev"));

let gamesRouter= require("./routes/gamesRouter")
let platformsRouter= require("./routes/plaformsRouter")

app.use("/api/games", gamesRouter)
app.use("/api/platforms", platformsRouter)


app.listen(PORT, () => {
    console.log(`Server is listening on PORT: ${PORT}.`)
})