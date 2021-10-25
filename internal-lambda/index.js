const debug = require('debug')('snkeos:test');

exports.handler = async (_event, _context) => {
    debug('HELLO WORLD');
    return { statusCode: 200, body: JSON.stringify({test: "Hello World"})};
};
