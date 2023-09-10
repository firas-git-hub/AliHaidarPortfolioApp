import React, { Component, useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import TopView from './components/top-view/TopView';
import ClickableCard, { ClickableCardProps } from './components/clickable-card/ClickableCard';
import { Routes, Route, Link } from "react-router-dom";
import NotFound from './pages/notFoundPage/NotFound';
import Services from './pages/servicesPage/ServicesPage';
import ContactInfo from './pages/contactInfoPage/ContactInfo';
import PoliciesRegulations from './pages/policiesRegulationsPage/PoliciesRegulations';
import data from "./data/navCardsListData.json"
import { useNavigate } from "react-router-dom";
import NewPatients from './pages/newpatientsPage/NewPatients';
import { IconButton } from '@mui/material';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';


function App() {

	const [scrollToTopVisibility, setScrollToTopVisibility] = useState(false);
	const toggleVisible = () => {
		const scrolled = document.getElementsByClassName("App")[0].scrollTop;
		if (scrolled > 450) {
			setScrollToTopVisibility(true)
		}
		else if (scrolled <= 450) {
			setScrollToTopVisibility(false)
		}
	};
	
	window.onload = () => {
		document.getElementsByClassName("App")[0].addEventListener('scroll', toggleVisible);
	}
	const navigate = useNavigate();
	let navCardsList: ClickableCardProps[] = data.map((element) => {
		return {
			...element,
			navigateOnClick: () => {
				navigate(element.routerPath);
				document.getElementsByClassName("App")[0].scroll({ top: 0, left: 0, behavior: 'smooth' });
			}
		}
	});

	return (
		<div className="App">
			<Routes>
				<Route path="/*" element={<NotFound />} />
				<Route path="/" element={<TopView componentDataToRender="home" />} />
				<Route path="/aboutme" element={<TopView componentDataToRender="aboutme" />} />
				<Route path="/services" element={<Services />} />
				<Route path="/contactinfo" element={<ContactInfo />} />
				<Route path="/policiesregulations" element={<PoliciesRegulations />} />
				<Route path="/newpatients" element={<NewPatients />} />
			</Routes>
			<div className="app-content" id="navCards">
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
			<IconButton className={"back-to-top-button " + (scrollToTopVisibility ? "" : "invisible")} onClick={scrollToTop}>
				<KeyboardDoubleArrowUpIcon />
			</IconButton>
		</div>
	);
}

const scrollToTop = () => {
	document.getElementsByClassName("App")[0].scroll({
		top: 0,
		behavior: "smooth"
	});
}

export default App;
