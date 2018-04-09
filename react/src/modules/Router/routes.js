export default [
    {
        path: '/',
        signal: 'app.homeRouted'
    },
    {
        path: '/movies',
        signal: 'app.moviesRouted'
    },
    {
        path: '/tv-shows',
        signal: 'app.tvShowsRouted'
    },
    {
        path: '/*',
        signal: 'app.catchAllRouted'
    }
];
