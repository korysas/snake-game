class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  renderGameboard(snake, foodCells) {
    var htmlRepresentation = this._getHtmlRepresentation();

    // place blank htmlRepresentation into the web browser
    $("body").html(htmlRepresentation);

    // place snake
    this._renderSnake(snake);

    // place food
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

  _setCellStyle(x, y, style) {
    var cell = $("#gameboard")[0].rows[y].cells[x];
    $(cell).children().addClass(style);
  }
}
