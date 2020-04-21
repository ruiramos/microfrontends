const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 8080;

app.use(express.static('dist'));
app.set('views', './')
app.set('view engine', 'hbs')

app.get('/', (req, res) => res.render('index', {
  APP_A_LOCATION: process.env.APP_A_LOCATION,
  APP_B_LOCATION: process.env.APP_B_LOCATION,
}));

app.listen(PORT, () => {
  console.log(`🚀 Server listening on port ${PORT}`);
})

