var method = ForeignKey.prototype;


function ForeignKey(name, columnName, referenceTable, referenceColumn = 'id') {
      this.name = name;
      this.columnName = columnName;
      this.referenceTable = referenceTable;
      this.referenceColumn = referenceColumn;
    }

module.exports = ForeignKey