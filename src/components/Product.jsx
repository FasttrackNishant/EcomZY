import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { add, remove } from '../redux/Slices/cartSlice';
import { toast } from 'react-hot-toast';

const Product = ({ post }) => {
	const { cart } = useSelector((state) => state);
	const dispatch = useDispatch();

	const addToCart = () => {
		dispatch(add(post));
		toast.success('Item added to Cart');
	};

	const removeFromCart = () => {
		dispatch(remove(post.id));
		toast.error('Item Removed Successfully');
	};

	const [selected, setSelected] = useState(false);
	return (
		<div
			className="flex flex-col justify-between items-center hover:scale-110 transition duration-300 ease-in 
		rounded-lg gap-3 p-4 mt-10 ml-5	  shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px]  flex-wrap
		
		
		
		
		hover:shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
			<div>
				<p className="font-semiboldbold text-gray-700 text-left text-lg truncate w-40 mt-1 ">
					{post.title}
				</p>
			</div>
			<div>
				<p className="w-40 text-gray-400 font-normal text-[10px] text-left">
					{post.description.split(' ').slice(0, 10).join(' ') + '...'}
				</p>
			</div>
			<div className="h-[180px]">
				<img src={post.image} alt=" " className="h-full w-full" />
			</div>
			<div className="flex justify-between items-center gap-14 w-full mt-5">
				<div>
					<p className="text-green-600 font-semibold">
						{' '}
						${post.price}
					</p>
				</div>
				<button >
					{cart.some((p) => p.id === post.id) ? (
						<button onClick={removeFromCart}
						className=" text-gray-700 border-1 border-gray-700 rounded-full font-semibold text-[12px]  p-1 px-3 uppercase outline  hover:bg-gray-700 hover:text-slate-100 transition duration-300 ease-in hover:outline w-[105px] ">
							<p>Remove Item </p>
						</button>
					) : (
						<button onClick={addToCart} className=" text-gray-700 border-1 border-gray-700 rounded-full font-semibold uppercase text-[12px]  p-1 px-3 outline  hover:bg-gray-700 hover:text-slate-100 transition duration-300 ease-in hover:outline w-[105px] ">
							<p>Add to Cart</p>
						</button>
					)}
				</button>
			</div>
		</div>
	);
};

export default Product;
