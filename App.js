import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Translator from "./pages/translator/Translator";
import WordsList from "./pages/wordsLists/WordsList";
import Navbar from './components/navbar/Navbar.jsx';

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Route path='*' element={<Navigate to='/translator' />} />
				<Route path='/translator' element={<Translator />} />
				<Route path='/wordsLists' element={<WordsList />} />
			</Routes>
		</BrowserRouter>

	);
}

export default App;
