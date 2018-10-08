#!/usr/bin/env node

const buildTask = require('./build');

module.exports = function () {
  return buildTask();
};
