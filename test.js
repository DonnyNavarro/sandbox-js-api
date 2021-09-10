/** An example file to test methods in development */
const api_https = require('./api_https.js');

/** Example request using the https api request package */
async function exampleHttps() {
    const method = 'GET';
    const host = 'covid19-api.com';
    const path = '/country/all?format=json';
    var response = await api_https.apiRequest(method, host, path);
    console.log(response);
}
exampleHttps();