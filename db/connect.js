const connString = process.env.DATABASE_URL || 'postgres://wmdmqpyz:MqiIqVWCLpEyTmeirBsFIUjNIiP5C2RN@horton.elephantsql.com:5432/wmdmqpyz'

const connectDB = {
    connectString: connString
}

module.exports = connectDB;

