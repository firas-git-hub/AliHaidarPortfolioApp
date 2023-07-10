import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';
import TopView from './components/top-view/TopView';
import ClickableCard from './components/clickable-card/ClickableCard';

function App() {
	return (
		<div className="App">
			{/* <NavBar></NavBar> */}
			<TopView></TopView>
			<div className="app-content">
				<ClickableCard></ClickableCard>
			</div>
			{/* <Footer></Footer> */}
		</div>
	);
}

export default App;
