module.exports = function drawMap() {
  for (let i = 0; i < xAxisCells; i++) {
    for (let j = 0; j < yAxisCells; j++) {
      mapOfCells[i][j].draw();
    }
  }
}
