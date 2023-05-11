const express = require('express');
 
const cors = require("cors")
const app = express();
app.use(cors());
const allChefs = require("./data.json")
const allRecipes = require("./recipe.json")
app.get('/', (req, res) => {
    res.json({massage: "hello server running"})
})
app.get ("/allData", (req, res) => {
    res.send(allChefs)
})
app.get ("/featuredRecipes", (req, res) => {
    res.send(allRecipes)
})
app.get ("/chefTipsAndTricks", (req, res) => {
    res.send(allRecipes)
})


app.listen(5000, () => {
    console.log("server running on port 5000");
})