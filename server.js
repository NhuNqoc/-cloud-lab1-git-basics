const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Phục vụ các file tĩnh (như index.html) nếu có
app.use(express.static(path.join(__dirname)));

// Route mặc định
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route kiểm tra health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Server is running smoothly on Docker!' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
