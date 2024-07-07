// index.test.js

const { generateSVG } = require('./index');

test('generateSVG creates correct SVG for a circle', () => {
  const input = {
    text: 'text',
    textColor: 'text color',
    shape: 'shape',
    shapeColor: 'shape color',
  };