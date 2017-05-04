class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    var htmlRepresentation = this._getHtmlRepresentation();
    $("body").html(htmlRepresentation);
  }

  renderGameboard(snake, foodCells) {
    var htmlRepresentation = this._getHtmlRepresentation();

    // place blank htmlRepresentation into the web browser
    $("body").html(htmlRepresentation);

    // place snake
    this._renderSnake(snake);

    // place food
    this._renderFood(foodCells);
  }

  getCellStyle(x, y) {
    var cell = $("#gameboard")[0].rows[y].cells[x];
    var style = $(cell).children().attr("class");
    return style;
  }

  _getHtmlRepresentation() {
    var result = "<table id=gameboard>";
    for (var i = 0; i < this.width; i++) {
      result += "<tr>";

      for (var j = 0; j < this.height; j++) {
        var cell = "<div class=default></div>";

        result += "<td>" + cell + "</td>";
      }

      result += "</tr>";
    }

    result += "</table>";
    return result;
  }

  _renderSnake(snake) {
    var segment = snake.head;
    while (segment !== null) {
      this._setCellStyle(segment.x, segment.y, 'snake-segment');
      segment = segment.next;
    }
  }

  _renderFood(foodCells) {
    for(var i = 0; i < foodCells.length; i++) {
      this._setCellStyle(foodCells[i].x, foodCells[i].y, 'food');
    }
  }

  _setCellStyle(x, y, style) {
    var cell = $("#gameboard")[0].rows[y].cells[x];
    $(cell).children().removeClass();
    $(cell).children().addClass(style);
  }
}
