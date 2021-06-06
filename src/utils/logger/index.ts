import bunyan from 'bunyan';
import config from 'config/environment/service';

const logger = bunyan.createLogger({ name: config.projectName });

export default logger;
