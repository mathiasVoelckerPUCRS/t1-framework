let mysql  = require('mysql');
let config = require('../node-mysql/config.js');

module.exports = {

insertInto(tableName, atributes) { 
        return new Promise(
            (resolve, reject) => {
            let connection = mysql.createConnection(config);
            
            sql = `insert into ${tableName} (`
            for(var i = 0; i < atributes.length; i++) {
                sql += `${atributes[i].name},`
            }
            sql = sql.substring(0, sql.length-1);
            sql += ') VALUES (';
            for(var i = 0; i < atributes.length; i++) {            
                sql += `'${atributes[i].value}',`
            }
            sql = sql.substring(0, sql.length-1);
            sql += ')';
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
        }) 
    }}