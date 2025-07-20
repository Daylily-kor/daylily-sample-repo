import { createLogger, format, transports }  from 'winston';
const { combine, timestamp, label, prettyPrint, printf, splat, colorize } = format;

const fmt = printf(({ level, message, label, timestamp }) => {
    return `[${label}] [${timestamp}] [${level.toUpperCase()}] ${message}`;
});

export const logger = createLogger({
    level: 'debug',
    format: combine(
        label({ label: 'daylily' }),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        splat(),
        prettyPrint({ colorize: true }),
        fmt
    ),
    transports: [
        new transports.Console(),
    ]
});