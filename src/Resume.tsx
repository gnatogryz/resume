import React, { useCallback, useState } from 'react';
import './Resume.scss';
import Divider from './components/Divider';
import Header from './components/Header';
import RemoteMarkdown from './components/RemoteMarkdown';

function Resume() {
	const [zoomedIn, setZoomedIn] = useState(false);

	// yes, I know useCallback here is overkill ;)
	const toggleZoom = useCallback(() => setZoomedIn(!zoomedIn), [zoomedIn]);
	const resumePageInlineStyle = {
		transform: `scale(${zoomedIn ? 1.6 : 1.0})`,
		cursor: zoomedIn ? 'zoom-out' : 'zoom-in',
	};

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
				</div>
			</div>
		</div>
	);
}

export default Resume;
