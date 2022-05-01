var config = {
    dev: {
        // database configurations
        mysql_database: {
            config: {
                host: 'localhost',
                port: 3306,
                user: 'root',
                password: 'root',
                database: 'airport'
            },
            db_connection : {},
            max_retry: 10

        },

        server: {
            port: 8090
        }
    }
};

// exports
module.exports = config;