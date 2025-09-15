
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;

// Serve static files from React app after build
app.use(express.static(path.join(__dirname, '../frontend/build')));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express backend!' });
});

// The "catchall" handler: for any request that doesn't match above, send React's index.html.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
