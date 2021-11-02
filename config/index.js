const config = {
    server: {
        port: process.env.SERVER_PORT
    },
    db: {
        mongodb: {
            db_host: process.env.MONGO_DB_HOST,
            db_name: process.env.MONGO_DB_NAME,
            db_port: process.env.MONGO_DB_PORT
        },
        mysql: {

        }
    },
}

module.exports = config
