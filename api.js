// Importeer de http-module
const http = require('http');

// Een array van liedjes
const songs = [
    { title: 'Song 1', artist: 'Artist 1' },
    { title: 'Song 2', artist: 'Artist 2' },
    { title: 'Song 3', artist: 'Artist 3' }
];

// Maak de server
const server = http.createServer((req, res) => {
    if (req.url === '/songs' && req.method === 'GET') {
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(songs));
    } else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found');
    }
});

// Start de server
const port = 3000;
server.listen(port, () => console.log(`Server is listening on port ${port}`));
