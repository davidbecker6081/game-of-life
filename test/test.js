// const chai = require('chai');
// const assert = chai.assert;
// const should = chai.should();
// const animate = game.animate;
const drawMap = require('./drawMap.js');
console.log(drawMap);
// console.log(game)
// console.log(animate)
//
// describe('test', () => {
//   it('should run a test', () => {
//     assert.equal('a', 'a')
//   })
// })

test('test suite runs', () => {
  expect(drawMap).toEqual(drawMap);
});
