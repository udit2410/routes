// express-server/server.js
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve the built login app on the /login route
app.use('/login', express.static(path.join(__dirname, 'login', 'dist')));

// Serve the built home app on the /home route
app.use('/home', express.static(path.join(__dirname, 'home', 'dist')));

// Redirect from login to home
app.get('/', (req, res) => {
  res.redirect('/login');
});

// app.get('/loginToHome', (req, res) => {
//     res.redirect('/home');
//   });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
