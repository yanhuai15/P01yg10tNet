const express = require('express');
const app = express();

// Define route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to PolyglotNet! Our language learning hub uses AI to adapt to your learning style, and offers interactive lessons, speech recognition exercises, and a global community of language learners to practice with.');
});

// Define route for the interactive lessons page
app.get('/interactive-lessons', (req, res) => {
  res.send('Learn a new language with our interactive lessons, designed to adapt to your learning style and pace.');
});

// Define route for the speech recognition exercises page
app.get('/speech-recognition-exercises', (req, res) => {
  res.send('Practice your pronunciation and speaking skills with our speech recognition exercises, which provide instant feedback and correction.');
});

// Define route for the community page
app.get('/community', (req, res) => {
  res.send('Connect with a global community of language learners, practice your language skills, and exchange tips and tricks with others.');
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000.');
});