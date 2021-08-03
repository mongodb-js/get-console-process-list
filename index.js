const { getConsoleProcessList } = require('bindings')('win_export_cert');

module.exports = getConsoleProcessList;