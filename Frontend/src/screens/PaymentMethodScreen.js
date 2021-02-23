import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../actions/cartActions';
import CheckoutSteps from '../components/CheckoutSteps';

export default function PaymentMethodScreen(props) {
	const cart = useSelector((state) => state.cart);
	const { shippingAddress } = cart;
	if (!shippingAddress.address) {
		props.history.push('/shipping');
	}
	const [paymentMethod, setPaymentMethod] = useState('PayPal');
	const dispatch = useDispatch();
	const submitHandler = (e) => {
		e.preventDefault();
		dispatch(savePaymentMethod(paymentMethod));
		props.history.push('/placeholder');
	};
	return (
		<div>
			<CheckoutSteps step1 step2 step3></CheckoutSteps>
			<form onSubmit={submitHandler} className='form'>
				<div>
					<h1>Payment Method</h1>
				</div>
				<div>
					<div>
						<input
							type='radio'
							name='paymentMethod'
							id='paypal'
							value='PayPal'
							required
							checked
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						<label htmlFor='paypal'>PayPal</label>
					</div>
					<div>
						<input
							type='radio'
							name='paymentMethod'
							id='stripe'
							value='Stripe'
							required
							onChange={(e) => setPaymentMethod(e.target.value)}
						/>
						<label htmlFor='stripe'>Stripe</label>
					</div>
				</div>
				<div>
					<button className='primary' type='submit'>
						Continue
					</button>
				</div>
			</form>
		</div>
	);
}
