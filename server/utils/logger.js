const { createLogger, transports, format } = require('winston');
const customFormat = format.combine(
  format.combine(
    format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    format.printf((info) => {
      return `${info.timestamp} - [${info.level.toUpperCase()}] - ${
        info.message
      }`;
    })
  )
);

const logger = createLogger({
  format: customFormat,
  transports: [
    new transports.Console({ level: 'silly' }),
    new transports.File({ filename: 'app.log', level: 'info' }),
  ],
});

module.exports = logger;
