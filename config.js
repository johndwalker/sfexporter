exports.SF_URL = process.env.SF_URL || '';
exports.USER_LOGIN = process.env.USER_LOGIN || '';
exports.PASS = process.env.PASS || '';
exports.DOWNLOAD_PATH = process.env.DOWNLOAD_PATH || '/sfexports';
exports.NODE_ENV = process.env.NODE_ENV || 'dev';
exports.LOG_LEVEL = process.env.LOG_LEVEL || 'debug';
exports.SERVICE_NAME = process.env.SERVICE_NAME || 'sfexporter';
exports.TIMEZONE = process.env.TIMEZONE || 'America/Denver';
exports.REPORT_INTERVAL = process.env.REPORT_INTERVAL || '40000';
exports.REPORT_TAG = process.env.REPORT_TAG || 'open'; // used by sfreportparser to designate collection