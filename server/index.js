const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../client/blockchainphr/public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/blockchainphr/src/components', 'home.js'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
