// Snake class uses a linked list type structure with added functionality

class Snake {
  constructor(head) {
    this.head = head;
    this.tail = head;
  }

  print() {
    var segment = this.head;

    while (segment !== null) {
      console.log(segment);
      segment = segment.next;
    }
  }

  addSegment() {
    var x_tail = this.tail.x;
    var y_tail = this.tail.y;

    switch (this.tail.direction) {
      case 'left':
        x_tail++;
        break;
      case 'up':
        y_tail++;
        break;
      case 'right':
        x_tail--;
        break;
      case 'down':
        y_tail--;
        break;
      default:
        // unexpected, don't add a segment in this case
        return;
    }

    var tailSegment = new SnakeSegment(x_tail, y_tail, this.tail.direction);
    this.tail.next = tailSegment;
    this.tail = tailSegment;
  }

  move(direction) {
    // when you try to go in the opposite direction
    if (this._isOppositeDirection(direction, this.head.direction)) {
      direction = this.head.direction;
    }

    // have we hit a wall

    // have we hit some snake food

    switch (direction) {
      case 'left':
        this._move(this.head.x - 1, this.head.y, this.head.direction, this.head);
        this.head.direction = 'left';
        break;
      case 'up':
        this._move(this.head.x, this.head.y - 1, this.head.direction, this.head);
        this.head.direction = 'up';
        break;
      case 'right':
        this._move(this.head.x + 1, this.head.y, this.head.direction, this.head);
        this.head.direction = 'right';
        break;
      case 'down':
        this._move(this.head.x, this.head.y + 1, this.head.direction, this.head);
        this.head.direction = 'down';
        break;
      default:
        // unexpected, don't move in this case
        return;
    }
  }

  isHeadOnFood(gameboard) {
    var cellStyle = gameboard.getCellStyle(this.head.x, this.head.y);
    if (cellStyle === 'food') {
      return true;
    }
  }

  isHeadBeyondWall(gameboard) {
    if (this.head.x === -1 || this.head.x === gameboard.width) {
      return true;
    }

    if (this.head.y === -1 || this.head.y === gameboard.height) {
      return true;
    }

    return false;
  }

  isHeadOnSnakeBody(gameboard) {
    var style = gameboard.getCellStyle(this.head.x, this.head.y);
    if (style === 'snake-segment') {
      return true;
    }

    return false;
  }

  _isOppositeDirection(d1, d2) {
    if (d1 === 'up') {
      if (d2 === 'down') {
        return true;
      }
    }

    if (d1 === 'down') {
      if (d2 === 'up') {
        return true;
      }
    }

    if (d1 === 'left') {
      if (d2 === 'right') {
        return true;
      }
    }

    if (d1 === 'right') {
      if (d2 === 'left') {
        return true;
      }
    }

    return false;
  }

  _getOppositeDirection(direction) {
    if (direction === 'up') {
      return 'down';
    }

    if (direction === 'down') {
      return 'up';
    }

    if (direction === 'left') {
      return 'right';
    }

    if (direction === 'right') {
      return 'left';
    }
  }

  _move(x, y, direction, segment) {
    // base case, we are ar the tail, move the coordinate to the next segment
    if (segment.next === null) {
      segment.x = x;
      segment.y = y;
      segment.direction = direction;
      return;
    }

    this._move(segment.x, segment.y, segment.direction, segment.next);

    // push the coordinate ahead after the recursive call has returned
    segment.x = x;
    segment.y = y;
    segment.direction = direction;
  }
}
