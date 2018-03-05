# How to play

1. Clone this repository to your local filesystem.
2. Open `index.html` in a web browser.
3. The game will start once the file is opened in the browser.
   Use the keyboard's arrow buttons to control the snake's direction.
 
# Configurable Parameters
By editing some variables in the JavaScript files one is able to configure how fast
the snake move as well as the amount of cells that are populated with snake food.

### Configuring the amount of food
In `app.js` on line 9 instantiate `SnakeFood` with the amount of food cells to be
placed on screen.

### Configuring snake speed
In `app.js` on line 51 change the `timeDelay` variable.
