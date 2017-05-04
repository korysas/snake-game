class SnakeFood {
  constructor(amount) {
    this.amount = amount;
  }

  getFoodCells(gameboard) {
    var result = [];

    for (var i = 0; i < this.amount; i++) {
      var coord = this._getRandomCoordinate(gameboard.width, gameboard.height);
      while (gameboard.getCellStyle(coord.x, coord.y) !== 'default') {
        coord = this._getRandomCoordinate(gameboard.width, gameboard.height);
      }

      result.push(coord);
    }

    return result;
  }

  _getRandomCoordinate(width, height) {
    var x = this._getRandomInt(0, height);
    var y = this._getRandomInt(0, width);
    return {'x':x, 'y': y};
  }

  _getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
