// instantiate a 40 x 40 Gameboard
var gameboard = new Gameboard(40, 40);
var htmlRepresentation = gameboard.getHtmlRepresentation();

// place htmlRepresentation into the web browser
$("body").html(htmlRepresentation);
