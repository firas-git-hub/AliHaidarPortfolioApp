import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar/NavBar';
import Footer from './components/footer/Footer';
import TopView from './components/top-view/TopView';
import ClickableCard, { ClickableCardProps } from './components/clickable-card/ClickableCard';
import { Routes, Route, Link } from "react-router-dom";
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';
import Services from './pages/services/Services';
import ContactInfo from './pages/contactInfo/ContactInfo';
import PoliciesRegulations from './pages/policiesRegulations/PoliciesRegulations';
import ReturningPatients from './pages/returningPatients/ReturningPatients';
import data from "./data/navCardsListData.json"
import { useLocation, useNavigate } from "react-router-dom";


function App() {

	const navigate = useNavigate();
	const [navCards, setNavCards] = useState([]);
	let tempParagraph = "My pincher collar is snapped on. Then comes the electric zapper collar. Finally, my purple at-home collar is taken off and I know I’m going for a walk to the dog park. I’m so excited to see my friends. I hope Spike or Thunder are there already. They're the most fun to chase and tumble with."
	let navCardsList: ClickableCardProps[] = data.map((element) => {
		return {
			...element,
			navigateOnClick: () => { 
				navigate(element.routerPath);
				document.getElementsByClassName("App")[0].scroll({top: 0, left: 0, behavior: 'smooth'});
			}
		}
	});

	return (
		<div className="App">
			{/* <NavBar></NavBar> */}
			<Routes>
				<Route path="/" element={<TopView />} />
				<Route path="/*" element={<NotFound />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contactinfo" element={<ContactInfo />} />
				<Route path="/policiesregulations" element={<PoliciesRegulations />} />
				<Route path="/returningpatients" element={<ReturningPatients />} />
			</Routes>
			<div className="app-content">
				{navCardsList.map((navCard: ClickableCardProps, index) =>
					<ClickableCard
						key={index}
						cardDescription={navCard.cardDescription}
						cardHeader={navCard.cardHeader}
						cardImagePath={navCard.cardImagePath}
						navigateOnClick={navCard.navigateOnClick}
					></ClickableCard>
				)}
			</div>
			{/* <Footer></Footer> */}
		</div>
	);
}

export default App;
