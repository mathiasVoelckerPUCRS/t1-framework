var Column = require('./framework/service/column');
var ForeignKey = require('./framework/service/foreignKey');
var create = require('./framework/service/create');
var TypeEnum = require('./framework/service/typeEnum');

module.exports = {
    async createTables() {
        //define your tables here
        var columnsTable1 = [];
        columnsTable1.push(new Column('column1', TypeEnum.string, null, false));
        columnsTable1.push(new Column('column2', TypeEnum.string, null, true));
        await create.createTable('table1', columnsTable1);

        var columnsTable2 = [];
        columnsTable2.push(new Column('column1', TypeEnum.string, null, false));
        columnsTable2.push(new Column('column2', TypeEnum.string, null, true));
        await create.createTable('table2', columnsTable2);

        var foreignKeys = [];
        var columnsTable2Table1 = []
        columnsTable2Table1.push(new Column('id_table1', TypeEnum.int, null, false));
        columnsTable2Table1.push(new Column('id_table2', TypeEnum.int, null, false));
        foreignKeys.push(new ForeignKey('fk_table1_table2_table1', 'id_table1', 'table1'));
        foreignKeys.push(new ForeignKey('fk_table1_table2_table2', 'id_table2', 'table2'));
        await create.createTable('table1_table2', columnsTable2Table1, foreignKeys);
    }
}