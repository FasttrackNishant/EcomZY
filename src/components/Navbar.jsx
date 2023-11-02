import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<div>
			<div className="flex flex-row justify-between">
				<NavLink to="/">
					<img
						src="../assests/pngwing.com.png"
						alt="img"
						width={150}
					/>
				</NavLink>
				<div>
					<NavLink to="/">
						<p>Home</p>
					</NavLink>
					<NavLink to="/cart">
						<FaCartShopping />
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
<div className="flex justify-between"></div>;
