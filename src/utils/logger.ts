import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
  transport: {
    target: 'pino-pretty'
  },
  timestamp: ()=> `,"time" : "${dayjs().format()}"`,
  base: {
    pid: false,
  },
  options: {
    colorize: true
  }
});

export default log;
