function Cell(x,y, cellSize) {
    this.x = x;
    this.y = y;
    this.size = cellSize;
    this.isAlive = false;
    this.neighbors = 0;
}

Cell.prototype.getNeighbors = function(mapOfCells, xAxisCells, yAxisCells) {
    if (this.x > 0 && mapOfCells[this.x - 1][this.y].isAlive) {
      this.neighbors++;
    }
    if (this.x < xAxisCells - 1 && mapOfCells[this.x + 1][this.y].isAlive) {
      this.neighbors++;
    }
    if (this.y < yAxisCells - 1 && mapOfCells[this.x][this.y + 1].isAlive) {
      this.neighbors++;
    }
    if (this.y > 0 && mapOfCells[this.x][this.y - 1].isAlive) {
      this.neighbors++;
    }
    if (this.x > 0 && this.y > 0 && mapOfCells[this.x - 1][this.y - 1].isAlive) {
      this.neighbors++;
    }
    if (this.x < xAxisCells - 1 && this.y > 0 && mapOfCells[this.x + 1][this.y - 1].isAlive) {
      this.neighbors++;
    }
    if (this.y < yAxisCells - 1 && this.x > 0 && mapOfCells[this.x - 1][this.y + 1].isAlive) {
      this.neighbors++;
    }
    if (this.x < xAxisCells - 1 && this.y < yAxisCells - 1 && mapOfCells[this.x + 1][this.y + 1].isAlive) {
      this.neighbors++;
    }
}

Cell.prototype.draw = function(ctx) {
    ctx.beginPath();
    ctx.rect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.strokeStyle = '#c0c3c5';
    ctx.stroke();
    ctx.closePath();

    if (this.isAlive) {
      ctx.fillStyle = '#50C878';
    } else {
      ctx.fillStyle = '#f3f3f3';
    }
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.stroke();

    return ctx
}


// module.exports = Cell;
