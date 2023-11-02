import React from 'react';
import { useSelector } from 'react-redux';

const Cart = () => {
	const { cart } = useSelector((state) => state);

	return (
		<div>
			{cart.length > 0 ? (
				<div>
					<div>
						{cart.map((item, index) => {
							return (
								<CartItem
									key={item.id}
									item={item}
									itemIndex={index}
								/>
							);
						})}
					</div>

					<div>
            <div>Your Cart</div>
            <div>Summary</div>
            <p></p>
          </div>
				</div>
			) : (
				<div>
					<h1>Cart Empty</h1>
					<Link to="/">
						<button>SHOP NOW</button>
					</Link>
				</div>
			)}
		</div>
	);
};

export default Cart;
