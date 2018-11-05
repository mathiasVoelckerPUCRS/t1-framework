let mysql  = require('mysql');
let config = require('../node-mysql/config.js');

module.exports = {

update(tableName, object, id) {
    return new Promise(
        (resolve, reject) => {
        let connection = mysql.createConnection(config);
        sql = `update ${tableName} set`
        for (let atribute in object) {
            sql += ` ${atribute} = ${object[atribute]} and`
        }
        sql = sql.substring(0, sql.length-3);
        sql += `where id = ${id}`

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

updateRow(tableName, atribute ,newAtribute) {
    return new Promise(
        (resolve, reject) => {
            let connection = mysql.createConnection(config);
        
            sql = `update ${tableName} set ${atribute.name} = '${atribute.value}' where ${newAtribute.name} = '${newAtribute.value}';`
            
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
        }
    )
}}