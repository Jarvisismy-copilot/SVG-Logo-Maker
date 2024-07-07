// index.test.js

const { generateSVG } = require('./index');

test('generateSVG creates correct SVG for a circle', () => {
  const input = {
    text: 'CLJ',
    textColor: 'white',
    shape: 'circle',
    shapeColor: 'red',
  };