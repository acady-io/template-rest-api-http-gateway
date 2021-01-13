// DO NOT MODIFY THIS FILE
// Use api.ts for implementing your API logic

import api from "./api";

export async function handler(event) {
    const response = {};
    await api.process(event, response,'AWS_GATEWAY_HTTP');
    return response;
}
