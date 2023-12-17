import React, { useState } from 'react';
import uuid from 'react-uuid';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Translator from "./pages/translator/Translator";
import WordsList from "./pages/wordsLists/WordsList";
import Navbar from './components/navbar/Navbar.jsx';

function App() {

	const allWords = [
		{ id: id(), initialWord: 'absolute', translation: 'абсолютный' },
		{ id: id(), initialWord: 'accept', translation: 'принять' },
		{ id: id(), initialWord: 'account', translation: 'счет' },
		{ id: id(), initialWord: 'accountant', translation: 'бухгалтер' },
		{ id: id(), initialWord: 'achieve', translation: 'достигнуть' }
	];

	// let allWords = {
	// 	absolute: "абсолютный", accept: "принять", account: "счет", accountant: "бухгалтер", achieve: "достигнуть"
	//   };

	function id() {
		return uuid();
	}

	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='*' element={<Navigate to='/translator' />} />
				<Route path='/translator' element={<Translator allWords={allWords} />} />
				<Route path='/wordsLists' element={<WordsList allWords={allWords} />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;