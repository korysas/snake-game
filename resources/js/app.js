// initialize a Gameboard
var gameboard = new Gameboard(60, 40);

// initialize snake
var head = new SnakeSegment(1, 1, 'down');
var snake = new Snake(head);

// initialize food
var snakeFood = new SnakeFood(500);
foodCells = snakeFood.getFoodCells(gameboard);

gameboard.renderGameboard(snake, foodCells);

// initialize score
$(".score h1").text('0');

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
var timeDelay = 50;
var score = 0;
var gameEngine = setInterval(function() {
  snake.move(lastArrowPressed);

  // snake on food
  if (snake.isHeadOnFood(gameboard)) {
    snake.addSegment();
    $(".info h1").text((++score).toString());
    snakeFood.replaceFoodCell(snake.head.x, snake.head.y, gameboard);
  }

  // snake hitting wall
  if (snake.isHeadBeyondWall(gameboard)) {
    endGame(gameEngine, timer);
  }

  // snake hitting own body
  if (snake.isHeadOnSnakeBody(gameboard)) {
    endGame(gameEngine, timer);
  }

  gameboard.renderGameboard(snake, foodCells);
}, timeDelay);

var start = new Date().getTime();
var timer = setInterval(function() {
    var now = new Date().getTime();
    var distance = now - start;

    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var formattedHours = formatTime(hours.toString());
    var formattedMinutes = formatTime(minutes.toString());
    var formattedSeconds = formatTime(seconds.toString());

    $(".timer h1").text(formattedHours + ':' + formattedMinutes + ':' + formattedSeconds);
});


function endGame(gameEngine, timer) {
  clearInterval(gameEngine);
  clearInterval(timer);
  alert("oh no! you died :(");
}

function formatTime(timeString) {
  if (timeString.length === 1) {
    return '0' + timeString;
  }
  return timeString;
}
