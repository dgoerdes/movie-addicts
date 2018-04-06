import Useragent from '@cerebral/useragent';

const UserAgentModule = Useragent({
    media: {},
    feature: false,

    parse: {
        browser: true,
        device: true
    },

    offline: {
        checkOnLoad: false,
        interceptRequests: true,
        reconnect: {
            initialDelay: 3,
            delay: 1.5
        },
        requests: false
    },

    window: true
});

export default UserAgentModule;
