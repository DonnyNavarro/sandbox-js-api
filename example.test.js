/** An example file to test methods in development */
const api_https = require('./api_https.js');
const logs = require('./logging.js');

/** Example request using the https api request package */
async function exampleHttps() {
    // Response parameters
    const method = 'GET';
    const host = 'covid19-api.com';
    const path = '/country/all?format=json';
    // Send request
    var response = await api_https.apiRequest(method, host, path);
    // Verify request succeeded
    expect(response.status).toEqual(200);
    logs.saveLog('covidResponse', JSON.stringify(response, null, 4));
    return response
}
describe('Example Test', () => {
    it('Gets Covid Data', async () => {
        const response = await exampleHttps();
        // console.log(response);
    })
});
