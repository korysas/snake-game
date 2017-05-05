class SnakeFood {
  constructor(amount) {
    this.amount = amount;
    this.foodCells = {};
  }

  getFoodCells(gameboard) {
    var result = {};

    for (var i = 0; i < this.amount; i++) {
      var coord = this._getRandomCoordinate(gameboard.width, gameboard.height);
      var key = this._coordToString(coord.x, coord.y);
      while (gameboard.getCellStyle(coord.x, coord.y) !== 'default') {
        coord = this._getRandomCoordinate(gameboard.width, gameboard.height);
        key = this._coordToString(coord.x, coord.y);
      }

      result[key] = coord;
    }

    this.foodCells = result;
    return result;
  }

  replaceFoodCell(x, y, gameboard) {
    delete this.foodCells[this._coordToString(x, y)];

    var coord = this._getRandomCoordinate(gameboard.width, gameboard.height);
    var key = this._coordToString(coord.x, coord.y);
    while (gameboard.getCellStyle(coord.x, coord.y) !== 'default') {
      coord = this._getRandomCoordinate(gameboard.width, gameboard.height);
      key = this._coordToString(coord.x, coord.y);
    }

    this.foodCells[key] = coord;
  }

  _coordToString(x, y) {
    var result = '(' + x.toString() + ', ' + y.toString() + ')';
    return result;
  }

  _getRandomCoordinate(width, height) {
    var x = this._getRandomInt(0, width);
    var y = this._getRandomInt(0, height);
    return {'x':x, 'y': y};
  }

  _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
