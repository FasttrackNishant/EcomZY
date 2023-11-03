import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import '../index.css'

const Navbar = () => {
	const { cart } = useSelector((state) => state);

	return (
		<div>
			<nav className="flex justify-between items-center h-20 text-slate-100 max-w-6xl mx-auto">
				<NavLink to="/">
					<div>
						<img
							src="https://react-product-cart-five.vercel.app/static/media/logo.abe38ad162a16fe8cdda.png"
							alt=" "
							className="h-14"
						/>
					</div>
				</NavLink>
				<div className="flex text-lg justify-center items-center text-slate-100 mr-3 px-3">
					<NavLink to="/">
						<p className="mr-5">Home</p>
					</NavLink>
					<NavLink to="/cart">
						<div>
							<FaCartShopping className="h-6 relative"  size={30}/>
							<span className='cartCounter'>{cart.length}</span>
						</div>
					</NavLink>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
<div className="flex justify-between"></div>;
