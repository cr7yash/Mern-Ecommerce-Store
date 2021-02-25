import express from 'express';
import mongoose from 'mongoose';
import userRouter from './routers/userRouter.js';
import productRouter from './routers/productRouter.js';
import dotenv from 'dotenv';
import orderRouter from './routers/orderRouter.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.MONGODB_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

console.log('DB connected');

// app.get('/api/products/:id', (req, res) => {
// 	const product = data.products.find((x) => x._id === req.params.id);
// 	if (product) {
// 		res.send(product);
// 	} else {
// 		res.status(404).send({ message: 'Product Not Found' });
// 	}
// });

// app.get('/api/products', (req, res) => {
// 	res.send(data.products);
// });

app.use('/api/products', productRouter);

app.use('/api/users', userRouter);
app.use('/api/orders', orderRouter);
app.use('/api/config/paypal', (req, res) => {
	res.send(process.env.PAYPAL_CLIENT_ID || 'sb');
});

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
