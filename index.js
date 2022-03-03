const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/movieApp')
  .then(() => console.log('Connection established!'))
  .catch(err => console.log(`Error: ${err}`));

const movieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  score: Number,
  rating: String
})

const Movie = mongoose.model('Movie', movieSchema);

const amadeus = new Movie({ title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});