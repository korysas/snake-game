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
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      return 'default';
    }

    var cell = $("#gameboard")[0].rows[y].cells[x];
    var style = $(cell).children().attr("class");
    return style;
  }

  _getHtmlRepresentation() {
    var result = "<table id=gameboard cellspacing=0 cellpadding=0>";
    for (var i = 0; i < this.height; i++) {
      result += "<tr>";

      for (var j = 0; j < this.width; j++) {
        var style = '';

        var isStyleSet = false;
        if (i === 0) {
          style += 'border-top ';
          isStyleSet = true;
        }

        if (i === this.height - 1) {
          style += 'border-bottom ';
          isStyleSet = true;
        }

        if (j === 0) {
          style += 'border-left ';
          isStyleSet = true;
        }

        if (j === this.width - 1) {
          style += 'border-right';
          isStyleSet = true;
        }

        if (!isStyleSet)
          style = 'default';

        var cell = "<div class=" + "'" + style + "'" + "></div>";

        result += "<td>" + cell + "</td>";
      }

      result += "</tr>";
    }

    result += "</table>";
    return result;
  }

  _renderSnake(snake) {
    var head = snake.head;
    this._setCellStyle(head.x, head.y, 'snake-head');

    var segment = snake.head.next;
    while (segment !== null) {
      this._setCellStyle(segment.x, segment.y, 'snake-segment');
      segment = segment.next;
    }
  }

  _renderFood(foodCells) {
    for (var key in foodCells) {
      if (!foodCells.hasOwnProperty(key)) continue;
      this._setCellStyle(foodCells[key].x, foodCells[key].y, 'food');
    }

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
