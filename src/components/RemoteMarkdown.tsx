import StyledMarkdown from './StyledMarkdown';
import { useEffect, useState } from 'react';

export default function RemoteMarkdown({ url }: { url: string }) {
	const [mdContent, setMdContent] = useState('');
	const [fetchError, setFetchError] = useState(false);
	useEffect(() => {
		const getMd = async () => {
			const resp = await fetch(url);
			if (resp.ok) {
				setMdContent(await resp.text());
			}
		};
		getMd().catch((e) => {
			setFetchError(true);
			console.error(e);
		});
	}, []);

	return mdContent ? <StyledMarkdown children={mdContent} /> : fetchError ? <div>Fetching markdown failed</div> : <div>Loading...</div>;
}
