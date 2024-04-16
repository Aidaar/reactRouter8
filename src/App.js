import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/Header/Header'
import Mans from './components/Mans/Mans'
import Home from './components/Home/Home'
import Womans from './components/Womans/Womans'
import About from './components/About/About'

function App() {
	

  return (
    <BrowserRouter>
			<Header />
			<Routes>
				<Route path='/' element={<Home />}/>
				<Route path='/about' element={<About />}/>
				<Route path='/mans' element={<Mans />}/>
				<Route path='/womans' element={<Womans />}/>
			</Routes>

		</BrowserRouter>
  );
}

export default App;
