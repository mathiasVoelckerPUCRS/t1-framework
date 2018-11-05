var Enum = require('enum');

var typeEnum = new Enum({'string': 'varchar(50)', 'int':'int' , 'boolean':'bit', 'decimal':'decimal'});

module.exports = typeEnum
