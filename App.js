import React, { useState } from 'react';
import uuid from 'react-uuid';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Translator from "./pages/translator/Translator";
import WordsList from "./pages/wordsLists/WordsList";
import Navbar from './components/navbar/Navbar.jsx';
import Footer from './components/footer/Footer.jsx';
import words from './API/words.json'

const allWords = words.map(word => ({ ...word, id: uuid() }));

function App() {

	return (
		<BrowserRouter>
			<Navbar />
			<main>
				<Routes>
					<Route path='*' element={<Navigate to='/translator' />} />
					<Route path='/translator' element={<Translator allWords={allWords} />} />
					<Route path='/wordsLists' element={<WordsList allWords={allWords} />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;