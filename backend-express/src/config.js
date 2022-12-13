var config = {};

config.host = "localhost";
config.port = 5000;

config.frontendDirName = "free-react-project-with-authentication-and-dashboard-page";

config.mongodbHost = "0.0.0.01";
config.MONGO_URL = `mongodb://${config.mongodbHost}:27017/myDB`;

module.exports = config;