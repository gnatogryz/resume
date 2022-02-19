import React from 'react';
import logo from './logo.svg';
import './Resume.scss';
import Divider from './components/Divider';
import Header from './components/Header';

function Resume() {
	return (
		<div className="resume-page">
			<div className="resume-container">
				<div className="header">
					<Divider orientation="bottom" thickness={1}></Divider>
					<Header subheader="software engineer">Michał Dobrzański</Header>
				</div>
				<div className="sidebar">
					<Divider orientation="right" thickness={1}></Divider>
					sidebar
				</div>
				<div className="main">main</div>
			</div>
		</div>
	);
}

export default Resume;
