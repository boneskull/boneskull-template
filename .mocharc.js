'use strict';

module.exports = {
  'forbid-only': Boolean(process.env.CI),
  slow: '1s',
  timeout: '2s',
};
