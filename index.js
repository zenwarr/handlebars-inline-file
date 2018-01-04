'use strict';

const fs = require('fs');

module.exports.register = handlebars => {
  handlebars.registerHelper('inline', filename => {
    return fs.readFileSync(filename, 'utf-8');
  });
};
