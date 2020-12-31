// DO NOT MODIFY THIS FILE
// Use api.ts for implementing your API logic
export async function handler(event) {
    const apiBuilder = require('./api');
    return await apiBuilder.process(event, 'AWS_GATEWAY_HTTP');
}
