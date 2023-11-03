import React from 'react';
import '../index.css';

const Spinner = () => {
	return (
		<div className=' absolute flex justify-center h-[450px] w-full items-center gap-3'>
			<div className="spinner"></div>
			<p><h1>Loading...</h1></p>
		</div>
	);
};

export default Spinner;
