class Gameboard {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getHtmlRepresentation() {
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

}
