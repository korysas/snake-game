// instantiate a 40 x 40 Gameboard
var gameboard = new Gameboard(40, 40);

// instantiate snake
var head = new SnakeSegment(0, 0, 'down');
var snake = new Snake(head);

gameboard.renderGameboard(snake, null);
