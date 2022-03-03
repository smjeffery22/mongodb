const mongoose = require('mongoose');

mongoose
	.connect('mongodb://localhost:27017/shopApp')
	.then(() => console.log('Connection established!'))
	.catch((err) => console.log(`Error: ${err}`));

const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
    required: true
	},
});

const Product = mongoose.model('Product', productSchema);

const bike = new Product({ name: 'Mountain Bike', price: '599', color: 'red' });
bike.save()
  .then(data => {
    console.log('Bike added');
    console.log(data);
  })
  .catch(err => {
    console.log('Error');
    console.log(err);
  })