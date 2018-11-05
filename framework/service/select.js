let mysql  = require('mysql');
let config = require('../node-mysql/config.js');

module.exports = {

findAll(tableName) {
    return new Promise(
        (resolve, reject) => {
            let connection = mysql.createConnection(config);
            sql = `select * from ${tableName}`;
            return connection.query(sql, function(err, results, fields) {
                if (err) {
                    reject(err);
                } else {
                    resolve(results); 
                }
                connection.end(function(err) {
                    if (err) {
                        return console.log(err.message);
                    }
                }); 
            });
        })
},

findById(tableName, id) {
    return new Promise(
        (resolve, reject) => {
            let connection = mysql.createConnection(config);
            sql = `select * from ${tableName} where id = ${id}`;
            return connection.query(sql, function(err, results, fields) {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(results); 
                }
                connection.end(function(err) {
                    if (err) {
                        return console.log(err.message);
                    }
                }); 
            });
        })
},

query(sql) {
    return new Promise(
        (resolve, reject) => {
            let connection = mysql.createConnection(config);
            return connection.query(sql, function(err, results, fields) {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(results); 
                }
                connection.end(function(err) {
                    if (err) {
                        return console.log(err.message);
                    }
                }); 
            });
        }
    )}
}