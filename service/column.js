var method = Column.prototype;


function Column(name, type, value, isNull) {
      this.name = name;
      this.type = type;
      this.value = value;
      this.isNull = isNull;
    }

module.exports = Column