import { Module } from 'cerebral';
import initMoviesSignal from '../Movies/signals/initMoviesSignal';
import initSignal from './signals/initSignal';
import routePageFactory from './factories/routePageFactory';

/*
 * APP MODULE
 */
export default Module({
    state: {
        requestedRoute: 'Home',
        activePage: null,
        transitioning: false,
    },
    signals: {
        initSignal,
        homeRouted: [
            routePageFactory({ pageName: 'Home' }),
        ],
        moviesRouted: [
            routePageFactory({
                pageName: 'Movies',
                beforeHook: [
                    initMoviesSignal,
                ]
            }),
        ],
        tvShowsRouted: [
            routePageFactory({ pageName: 'TvShows' }),
        ],
        catchAllRouted: [
            routePageFactory({ pageName: 'ErrorNotFound' }),
        ]
    }
});
