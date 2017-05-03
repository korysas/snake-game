class SnakeSegment {
  constructor(x, y, direction) {
    // x and y coordinates
    this.x = x;
    this.y = y;

    // next segment in the snake
    this.next = null;

    // direction of the segment
    this.direction = direction;
  }
}
