"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config = require('../config/config.json');
const env = process.env.environment || 'development';
/** Configurations with respect to the environments choosen */
exports.environmentConfigs = config[env];
/** Connection to postgres database */
var options = {
    auto_reconnect: true,
    reconnectTries: 60,
    reconnectInterval: 500,
    useNewUrlParser: true
};
mongoose.connection.on('connecting', function () {
    console.log('connecting to MongoDB...');
});
mongoose.connection.on('error', function (err) {
    console.log(err);
    console.error('MongoDB Connection Error. Please make sure that MongoDB is running.');
});
mongoose.connection.on('disconnected', function () {
    console.log("Mongoose default connection is disconnected");
});
mongoose.connection.on('connected', function () {
    console.log('MongoDB connected!');
});
mongoose.connection.on('disconnected', function () {
    console.log('MongoDB disconnected!');
    //mongoose.connect(config.databaseurl, options);
});
exports.mongooseConnect = () => mongoose.connect(config[env].mongo.uri, options);
/** Common Settings which can be used throughout the app */
exports.commonSettings = {
    KEY: 'Value'
};
//# sourceMappingURL=settings.js.map