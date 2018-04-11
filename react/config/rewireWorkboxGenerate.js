const {rewireWorkboxGenerate} = require('react-app-rewire-workbox');

module.exports = function override(config, env) {

    if (env === "production") {
        console.log("Production build - Adding Workbox for PWAs");

        config = rewireWorkboxGenerate({
            runtimeCaching: [
                {
                    // Match any same-origin request that contains 'api'.
                    urlPattern: new RegExp('^https://api\.themoviedb\.org/'),
                    // Apply a network-first strategy.
                    handler: 'networkFirst',
                    options: {
                        // Fall back to the cache after 10 seconds.
                        networkTimeoutSeconds: 10,
                        // Use a custom cache name for this route.
                        cacheName: 'tmdb-api-cache',
                        // Configure custom cache expiration.
                        expiration: {
                            maxEntries: 5,
                            maxAgeSeconds: 60,
                        },
                        // Configure which responses are considered cacheable.
                        cacheableResponse: {
                            statuses: [0, 200],
                        },
                    },
                },
            ]
        })(config, env);
    }

    return config;
};
