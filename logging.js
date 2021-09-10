/** This file contains methods for logging and saving files locally */
const fs = require('fs');

exports.saveLog = function (filePrefix, data) {
    // Save response locally as a unique file
    const filenameBase = './logs/';
    const timestamp = new Date().toISOString();
    const filenameEnding = '.json';
    fs.writeFile(filenameBase + filePrefix + '_' + timestamp + filenameEnding, data, 'utf8', () => {});
}
