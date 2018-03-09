const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const mapOfCells = [];
const xAxisCells = 50;
const yAxisCells = 50;
const cellSize = 20;
let generation = 0;
let isAutomate = false;
let fps = 5;
let now;
let then = Date.now();
let speed = 1000 / fps;
let delta;

function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.size = cellSize;
  this.isAlive = false;
  this.neighbors = 0;
  this.getNeighbors = function() {
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
    if (this.x < width - 1 && this.y > 0 && mapOfCells[this.x + 1][this.y - 1].isAlive) {
      this.neighbors++;
    }
    if (this.y < yAxisCells - 1 && this.x > 0 && mapOfCells[this.x - 1][this.y + 1].isAlive) {
      this.neighbors++;
    }
    if (this.x < width - 1 && this.y < yAxisCells - 1 && mapOfCells[this.x + 1][this.y + 1].isAlive) {
      this.neighbors++;
    }
  }

  this.draw = () => {
    ctx.beginPath();
    ctx.rect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();

    if (this.isAlive) {
      ctx.fillStyle = '#000';
    } else {
      ctx.fillStyle = '#f3f3f3';
    }
    ctx.fillRect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.stroke();
  }
}

function initializeMap() {
  for (let i = 0; i < xAxisCells; i++) {
    const temp = [];
    for (let j = 0; j < yAxisCells; j++) {
      temp[j] = new Cell(i, j);
    }
    mapOfCells[i] = temp;
  }
  console.log(mapOfCells);
}

function drawMap() {
  for (let i = 0; i < xAxisCells; i++) {
    for (let j = 0; j < yAxisCells; j++) {
      mapOfCells[i][j].draw();
    }
  }
}

function toggleCellOnClick(e) {
  const xPosition = e.offsetX - canvas.offsetLeft;
  const yPosition = e.offsetY - canvas.offsetTop;
  toggleCell(xPosition, yPosition);
}

function toggleCell(xPosition, yPosition) {
  for (let i = 0; i < xAxisCells; i++) {
    for (let j = 0; j < yAxisCells; j++) {
      cell = mapOfCells[i][j];

      if ((xPosition >= cell.x * cell.size && xPosition < cell.x * cell.size + cell.size)
      && (yPosition >= cell.y * cell.size && yPosition < cell.y * cell.size + cell.size)) {
        cell.isAlive = !cell.isAlive;
        console.log(cell)
      }
    }
  }
  drawMap()
}

canvas.addEventListener('click', toggleCellOnClick, false);

initializeMap();
drawMap();
