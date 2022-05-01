const { reject, resolve } = require('bluebird');
const res = require('express/lib/response');
const mysql = require('mysql');

const CONNECTION_CONFIG = require('../../config/config');

let initialization = async () => {
    let connection = mysql.createConnection(CONNECTION_CONFIG.dev.mysql_database.config);
    await connection.connect((err) => {
        if (!err) {
            console.log('Connected!');
            
        }
        else {
            console.log('Failed to connect!');
        }
    });
    return connection;
};

let connection_db = () => {
    let connection = mysql.createConnection(CONNECTION_CONFIG.dev.mysql_database.config);
    return connection;
};

let query_db = (arg) => {
    let connection = CONNECTION_CONFIG.dev.mysql_database.db_connection;
    return new Promise((resolve, reject) => {
        connection.query('SELECT * from `employee` where ssn=?', arg, function(err, res) {
            if (err) {
                return reject(err);
            }
            return resolve(res);
        });
    });  
};


module.exports = {initialization, connection_db, query_db};
//connection.then((a) => a.query('SELECT * from address', (err, res) => console.log(res)));