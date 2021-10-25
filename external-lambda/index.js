
const debug = require('debug')('snkeos:test');
const axios = require('axios');

exports.handler = async (_event, _context) => {
    const url = process.env.INTERNAL_API_URL
    debug('externalAPI - ' + url);

    const response = await axios.get(url, { validateStatus: null });    
    return { statusCode: 200, body: JSON.stringify(response.data) };
};
