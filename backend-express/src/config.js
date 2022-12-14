var config = {};

// express server
config.host = "localhost";
config.port = 5000;

// mongodb
config.mongodbHost = "0.0.0.0";
config.mongodbUrl = `mongodb://${config.mongodbHost}:27017/myDB`;

// auth
config.secretOrPrivateKey = "secretKey";

// frontend api
config.frontendDirName = "free-react-project-with-authentication-and-dashboard-page";

// export default config;
module.exports = config;