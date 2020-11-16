import bcrypt from 'bcrypt';

const data = {
	users: [
		{
			name: 'Yash',
			email: 'yashxyz@gmail.com',
			password: bcrypt.hashSync('123456', 8),
			isAdmin: true,
		},
		{
			name: 'anan',
			email: 'anan@gmail.com',
			password: bcrypt.hashSync('123456', 8),
			isAdmin: false,
		},
		{
			name: 'anany',
			email: 'anany@gmail.com',
			password: bcrypt.hashSync('123456', 8),
			isAdmin: false,
		},
	],
	products: [
		{
			_id: '1',
			name: 'Nike Slim Shirt',
			category: 'Shirts',
			image: '/images/p1.jpg',
			price: 120,
			brand: 'Nike',
			rating: 4.5,
			numReviews: 10,
			description: 'High quality product',
		},
		{
			_id: '2',
			name: 'Nike Slim Shirt',
			category: 'Shirts',
			image: '/images/p2.jpg',
			price: 120,
			brand: 'Nike',
			rating: 4.5,
			numReviews: 10,
			description: 'High quality product',
		},
		{
			_id: '3',
			name: 'Nike Slim Shirt',
			category: 'Shirts',
			image: '/images/p3.jpg',
			price: 120,
			brand: 'Nike',
			rating: 4.5,
			numReviews: 10,
			description: 'High quality product',
		},
	],
};

export default data;
