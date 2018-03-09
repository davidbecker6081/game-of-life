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
  this.draw = () => {
    ctx.beginPath();
    ctx.rect(this.x * this.size, this.y * this.size, this.size, this.size);
    ctx.strokeStyle = '#000';
    ctx.stroke();
    ctx.closePath();

    this.isAlive ? ctx.fillStyle = '#000' : ctx.fillStyle = '#f3f3f3';
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

initializeMap();
