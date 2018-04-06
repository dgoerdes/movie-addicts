const fs = require('fs');
const dotEnv = require('dotenv');

module.exports = () => {
    // ENVIRONMENT SETUP
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

    const dotEnvResults = dotEnv.config({
        path: dotEnvPath
    });

    if (dotEnvResults.error) throw dotEnvResults.error;
};
