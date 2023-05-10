const express = require('express');
 
const cors = require("cors")
const app = express();
app.use(cors());
const allChefs = require("./data.json")

app.get('/', (req, res) => {
    res.json({massage: "hello server running"})
})
app.get ("/allData", (req, res) => {
    res.send(allChefs)
})


app.listen(5000, () => {
    console.log("server running on port 5000");
})