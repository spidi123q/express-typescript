import mongoose from 'mongoose';

import config  from '../config/config'

const env = process.env.environment || 'development';

/** Configurations with respect to the environments choosen */
export const environmentConfigs = config[env];

/** Connection to postgres database */
var options = {
    auto_reconnect: true,
    reconnectTries: 60,
    reconnectInterval: 500,
    useNewUrlParser: true,
    useUnifiedTopology: true 
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

export const mongooseConnect = () => mongoose.connect(config[env].mongo.uri, options);

/** Common Settings which can be used throughout the app */
export const commonSettings = {
    KEY : 'Value'
};
