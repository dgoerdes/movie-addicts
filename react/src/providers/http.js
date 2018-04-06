import HttpProvider from '@cerebral/http';

const http = HttpProvider({
    baseUrl: '',

    headers: {
        'Content-Type': 'application/json; charset=UTF-8',
        'Accept': 'application/json'
    },

    withCredentials: false,

    // Provide a global request timeout for all calls
    // which can be overwritten for request by providing
    // a different timeout when doing a request
    // in actions or operators
    timeout: 5000
});

export default http;
