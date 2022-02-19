import React, { ReactNode } from 'react';
import './Header.scss';

export default function Header({ children, subheader }: { children: ReactNode; subheader: string }) {
	return (
		<div id="main-header">
			<h1>{children}</h1>
			<span>{subheader}</span>
		</div>
	);
}