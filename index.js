const express = require('express');
const app = express();

app.use(express.json());

// Root
app.get('/', (req, res) => {
  res.status(200).json({
    message: "API is running"
  });
});

// Health
app.get('/health', (req, res) => {
  res.status(200).json({
    message: "healthy"
  });
});

// Me
app.get('/me', (req, res) => {
  res.status(200).json({
    name: "Owolabi Grace",
    email: "graceowolabi09@gmail.com",
    github: "https://github.com/owolabigrace",
  });
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
