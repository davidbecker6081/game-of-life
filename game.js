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
