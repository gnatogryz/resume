const app = require('express')();

app.get('/api/pdf/:slug', (req, res) => {
	const { slug } = req.params;
	res.end(`Item: ${slug}`);
});

module.exports = app;
