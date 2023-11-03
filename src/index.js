import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Toaster } from 'react-hot-toast';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		{/* <ToastContainer> */}
		<Provider store={store}>
			<App />
			<Toaster />
		</Provider>
		{/* </Toa stContainer> */}
	</BrowserRouter>
);
