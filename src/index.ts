import http from 'http';
import { logger } from './logger';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!');
});

server.on('request', (req, res) => {
    logger.log('info', 'Hello %s!', 'World');
    logger.log('debug', `${req.method} ${req.url}`);
});

server.on('error', (err) => {
    logger.log('error', 'Server error: %s', err);
});

server.listen({
    port: 8080,
    reusePort: true
}, () => {
    logger.log('info', 'Server is listening on http://0.0.0.0:8080');
});