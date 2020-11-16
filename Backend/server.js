import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';

const app = express();

mongoose.connect(
	process.env.MONGODB_URL ||
		'mongodb+srv://yashaqua:MMxYFFu7PKqp4l50@cluster0.ytuke.mongodb.net/<dbname>?retryWrites=true&w=majority',
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	}
);

app.get('/api/products/:id', (req, res) => {
	const product = data.products.find((x) => x._id === req.params.id);
	if (product) {
		res.send(product);
	} else {
		res.status(404).send({ message: 'Product Not Found' });
	}
});

app.get('/api/products', (req, res) => {
	res.send(data.products);
});

app.use('/api/users', userRouter);
app.get('/', (req, res) => {
	res.send('Server is ready');
});

app.get('/', (req, res) => {
	res.send('Hi backend');
});

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

app.use((err, req, res, next) => {
	res.status(500).send({ message: err.message });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
	console.log(`Serve at http://localhost:${port}`);
});
