/** This file contains methods for logging and saving files locally */
const fs = require('fs');

exports.saveLog = function (filePrefix, data) {
    // Save data locally as a unique file
    // TODO: Use timestamp as a foldername, so that all logs for a given run can be saved in a single unique folder
    const folder = './logs/';
    const timestamp = new Date().toISOString();
    const filenameEnding = '.json';
    const testName = expect.getState().currentTestName;
    const newDir = folder + testName + '_' + timestamp + '/';
    if (!fs.existsSync(newDir)){
        fs.mkdirSync(newDir);
    }
    fs.writeFile(newDir + filePrefix + '_' + new Date().toISOString() + filenameEnding, data, 'utf8', (err) => {});
}
