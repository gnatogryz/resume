import React, { MouseEventHandler, useCallback, useEffect, useState } from 'react';
import './Resume.scss';
import Divider from './components/Divider';
import Header from './components/Header';
import RemoteMarkdown from './components/RemoteMarkdown';
import StyledMarkdown from './components/StyledMarkdown';

function Resume() {
	const [zoomedIn, setZoomedIn] = useState(false);
	const [targetCompany, setTargetCompany] = useState('');

	// yes, I know useCallback here is overkill ;)
	const toggleZoom = useCallback((e) => e.target.tagName !== 'A' && setZoomedIn(!zoomedIn), [zoomedIn]);
	const resumePageInlineStyle = {
		transform: `scale(${zoomedIn ? 1.6 : 1.0})`,
		cursor: zoomedIn ? 'zoom-out' : 'zoom-in',
	};

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		params.has('company') && setTargetCompany(params.get('company')!);
	}, []);

	return (
		<div className="resume-page" style={resumePageInlineStyle} onClick={toggleZoom}>
			<div className="resume-container">
				<div className="header">
					<Divider orientation="bottom" thickness={2} />
					<Header subheader="software engineer">Michał Dobrzański</Header>
				</div>
				<div className="sidebar">
					<Divider orientation="right" thickness={1} />
					<RemoteMarkdown url="/summary.md" />
				</div>
				<div className="main">
					<RemoteMarkdown url="/main.md" />
					{targetCompany && (
						<StyledMarkdown>{`_I hereby agree that my personal data will be processed by ${targetCompany} in order to recruit for the position I am applying for._`}</StyledMarkdown>
					)}
				</div>
			</div>
		</div>
	);
}

export default Resume;
