import { config } from 'dotenv';

config();

const variables: Record<string, any> = { ...process.env };

variables.LOG_TYPES = variables.LOG_TYPES ? variables.LOG_TYPES.split(',') : ['console'];

export default variables;
