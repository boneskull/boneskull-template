'use strict';

module.exports = {
  require: ['test/setup.js'],
  timeout: '2s',
  slow: '1s',
  'forbid-only': Boolean(process.env.CI)
};
