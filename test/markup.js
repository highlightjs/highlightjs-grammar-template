'use strict';

const fs = require('fs');
const path = require('path');
const glob = require('glob');
require('should');
const hljs = require('highlight.js/lib/core');
const example = require('../src/languages/example');

hljs.registerLanguage('example', example);

const expects = glob.sync(path.join(__dirname, 'markup/example/*.expect.txt'));

describe('example', () => {
  expects.forEach((filename) => {
    const name = path.basename(filename, '.expect.txt');
    it(`should markup ${name}`, () => {
      const source = fs.readFileSync(filename.replace(/\.expect/, ''), 'utf8');
      const expected = fs.readFileSync(filename, 'utf8');
      hljs.highlight(source, { language: 'example' }).value.trim()
        .should.equal(expected.trim());
    });
  });
});
