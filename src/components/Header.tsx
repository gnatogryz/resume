import React, { ReactNode } from 'react';
import './Header.scss';

export default React.memo(function ({ children, subheader }: { children: ReactNode; subheader: string }) {
	return (
		<div id="main-header">
			<div className="header-container">
				<div className="left">
					<img className="avatar" src="avatar.jpg" />
				</div>
				<div className="right">
					<h1>{children}</h1>
					<span>{subheader}</span>
				</div>
			</div>
		</div>
	);
});
