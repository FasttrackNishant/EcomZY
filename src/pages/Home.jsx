import { useEffect, useState } from 'react';

const Home = () => {
	const API_URL = 'https://fakestoreapi.com/products';

	const [loading, setLoading] = useState(false);
	const [posts, setPosts] = useState([]);

	async function fetchData() {
		setLoading(true);

		try {
			const res = await fetch(API_URL);
			const data = await res.json();

			setPosts(data);
		} catch (error) {
			console.log('Error in Fetching Data');
			setPosts([]);
		}

		setLoading(false);
	}

	useEffect(() => {
		fetchData();
	});

	return (
		<div>
			{loading ? (
				<h1>Loadingg...</h1>
			) : posts.length > 0 ? (
				<div>
					{posts.map((post) => (
						<Product key={post.id} post={post} />
					))}
				</div>
			) : (
				<h1>No Data Found</h1>
			)}
		</div>
	);
};

export default Home;
