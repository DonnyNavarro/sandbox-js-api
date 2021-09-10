/** This file contains methods for logging and saving files locally */
const fs = require('fs');

exports.saveLog = function (filePrefix, data) {
    // Save data locally as a unique file
    const folder = './logs/';
    const timestamp = new Date().toISOString();
    const filenameEnding = '.json';
    fs.writeFile(folder + filePrefix + '_' + timestamp + filenameEnding, data, 'utf8', () => {});
}
