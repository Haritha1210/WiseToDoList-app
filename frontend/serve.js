const http = require('http');
const fs = require('fs');
const path = require('path');

const mime = {
  html: 'text/html',
  css: 'text/css',
  js: 'application/javascript',
  png: 'image/png',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  svg: 'image/svg+xml',
  ico: 'image/x-icon'
};

const server = http.createServer((req, res) => {
  const requestUrl = req.url === '/' ? '/index.html' : req.url;
  const filePath = path.join(__dirname, requestUrl);
  const ext = path.extname(filePath).slice(1);

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/plain' });
      res.end('Not found');
      return;
    }
    res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
    res.end(data);
  });
});

const PORT = 8000;
server.listen(PORT, () => {
  console.log(`Frontend server running on http://localhost:${PORT}`);
});
