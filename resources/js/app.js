// initialize a Gameboard
var gameboard = new Gameboard(40, 40);

// initialize snake
var head = new SnakeSegment(0, 0, 'down');
var snake = new Snake(head);

// initialize food
var snakeFood = new SnakeFood(5);
foodCells = snakeFood.getFoodCells(gameboard);

gameboard.renderGameboard(snake, foodCells);

// obtain user input, we use down as starting direction
var lastArrowPressed = 'down';
$(document).keydown(function(e) {
  switch(e.which) {
    // left
    case 37:
      if (lastArrowPressed !== 'right')
        lastArrowPressed = 'left';
      break;

    // up
    case 38:
      if (lastArrowPressed !== 'down')
        lastArrowPressed = 'up';
      break;

    // right
    case 39:
      if (lastArrowPressed !== 'left')
        lastArrowPressed = 'right';
      break;

    // down
    case 40:
      if (lastArrowPressed !== 'up')
      lastArrowPressed = 'down';
      break;

    default: return;
  }
  e.preventDefault();
});

// constantly move snake and re-render gameboard
var timeDelay = 100;
var gameEngine = setInterval(function() {
  snake.move(lastArrowPressed);
  if (snake.isHeadOnFood(gameboard)) {
    snake.addSegment();
  }
  gameboard.renderGameboard(snake, foodCells);
}, timeDelay);
