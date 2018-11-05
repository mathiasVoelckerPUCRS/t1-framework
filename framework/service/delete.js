let mysql  = require('mysql');
let config = require('../node-mysql/config.js');

module.exports = {

delete(tableName, id) {
    return new Promise(
        (resolve, reject) => {
        let connection = mysql.createConnection(config);
        sql = `delete from ${tableName} where id = ${id}`
        connection.query(sql, function(err, results, fields) {
            if (err) {
                reject(err.message);
            }
            else {
                resolve(results)
            }
        });
        connection.end(function(err) {
            if (err) {
                return console.log(err.message);
            }
        });
    })
},

deleteRow(tableName, atribute) {
    return new Promise(
        (resolve, reject) => {
            let connection = mysql.createConnection(config);
        
            sql = `delete from ${tableName} WHERE ${atribute.name} = ${atribute.value}`
          
            connection.query(sql, function(err, results, fields) {
                if (err) {
                    reject(err.message);
                } else {
                    resolve(results);
                }
            });
        
            connection.end(function(err) {
                if (err) {
                    return console.log(err.message);
                }
            }); 
        });
    }
}