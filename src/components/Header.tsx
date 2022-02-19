import React, { ReactNode } from 'react';
import './Header.scss';

export default function Header({ children }: { children: ReactNode }) {
	return (
		<div id="main-header">
			<h1>{children}</h1>
			<span>software engineer</span>
		</div>
	);
}
