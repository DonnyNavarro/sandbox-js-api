/** This file contains methods for creating, sending, and receiving api requests */

var https = require('https');
exports.apiRequest = function (method, host, path, headers = {}) {
    var options = {
        method: method,
        host: host,
        path: path,
        headers: headers
    };

    return new Promise(res => {
        https.request(options, (resp) => {
            let data = '';
            // A chunk of data has been received.
            resp.on('data', chunk => {
                data += chunk;
            });
            // The whole response has been received. Print out the result.
            resp.on('end', () => {
                // console.log(JSON.parse(data).explanation);
                let jsonData;
                try {
                    jsonData = JSON.parse(data);
                    // console.log(jsonData);
                } catch {
                    jsonData = { resp: data };
                }
                res({
                    result: jsonData,
                    status: resp.statusCode
                });
            });
        }).end();
    });
};
