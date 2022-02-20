import React from 'react';
import ReactMarkdown from 'react-markdown';
import './StyledMarkdown.scss';

// parkour
const [H1, H2, H3] = (['h1', 'h2', 'h3'] as (keyof JSX.IntrinsicElements)[]).map((Element) => ({ node, children, ...props }: any) => (
	<div className="underlined">
		<Element {...props}>{children}</Element>
	</div>
));

export default function StyledMarkdown({ children }: { children: string }) {
	return (
		<ReactMarkdown
			components={{
				h1: H1,
				h2: H2,
				h3: H3,
			}}
		>
			{children}
		</ReactMarkdown>
	);
}
