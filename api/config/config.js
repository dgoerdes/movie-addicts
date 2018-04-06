const fs = require('fs');
const Joi = require('joi');

let dotEnvPath;
const environment = process.env.NODE_ENV || 'development';

if (fs.existsSync(`.env-${environment}-local`)) {
    dotEnvPath = `.env-${environment}-local`;
} else if (fs.existsSync(`.env-${environment}`)) {
    dotEnvPath = `.env-${environment}`;
} else if (fs.existsSync('.env-local')) {
    dotEnvPath = '.env-local';
} else if (fs.existsSync('.env')) {
    dotEnvPath = '.env';
}

require('dotenv').config({
    path: dotEnvPath
});

const envVarsSchema = Joi.object({
    NODE_ENV: Joi.string()
        .allow(['development', 'production'])
        .default('development'),
    PORT: Joi.number()
        .default(3001),
    MONGODB_HOST: Joi.string().required()
        .description('Mongo DB host url'),
    MONGODB_PORT: Joi.number()
        .default(27017)
}).unknown().required();

const { error, value: envVars } = Joi.validate(process.env, envVarsSchema);

if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}

const config = {
    env: envVars.NODE_ENV,
    port: envVars.PORT,
    mongodb: {
        host: envVars.MONGODB_HOST,
        port: envVars.MONGODB_PORT
    }
};

module.exports = config;
