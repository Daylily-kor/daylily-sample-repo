import http from 'http';
import { logger } from './logger';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.write(`Request: ${req.method} ${req.url}\n`);
    res.end('Message: Hello, World from Node.js!\n');
});

server.on('request', (req, res) => {
    logger.log('info', 'Hello %s!', 'World');
    logger.log('debug', `${req.method} ${req.url}`);
});

server.on('error', (err) => {
    logger.log('error', 'Server error: %s', err);
});

server.listen({
    port: 12345,
    reusePort: true
}, () => {
    logger.log('info', 'Server is listening on http://0.0.0.0:12345');
});