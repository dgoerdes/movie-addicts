import Useragent from '@cerebral/useragent';

const UserAgentModule = Useragent({
    media: {
        small: '(max-width: 639px)',
        medium: '(min-width: 640px) and (min-width: 1199px)',
        large: '(min-width: 1200px)',
    },
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
