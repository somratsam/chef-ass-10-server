const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());

const allChefs = require('./data.json');
const allRecipes = require('./recipe.json');

app.get('/', (req, res) => {
  res.json({ message: 'Hello, server is running' });
});

app.get('/allData', (req, res) => {
  res.send(allChefs);
});

app.get('/featuredRecipes', (req, res) => {
  res.send(allRecipes);
});

app.get('/chefTipsAndTricks', (req, res) => {
  res.send(allRecipes);
});
app.get('/allData/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const chef = allChefs.find((chef) => chef.id === id);
    if (chef) {
      res.send(chef);
    } else {
      res.status(404).json({ error: 'Chef not found' });
    }
  });
  

// app.get('/chefs/:chefId', (req, res) => {
//   const chefId = req.params.chefId;
//   const chef = allChefs.find((chef) => chef.id === parseInt(chefId));
//   if (chef) {
//     res.send(chef);
//   } else {
//     res.status(404).json({ error: 'Chef not found' });
//   }
// });

app.listen(5000, () => {
  console.log('Server running on port 5000');
});
