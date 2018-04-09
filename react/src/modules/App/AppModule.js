import { Module } from 'cerebral';
import { set } from 'cerebral/operators';
import { state, props } from 'cerebral/tags';

/*
 * APP MODULE
 */
export default Module({
    state: {
        requestedRoute: 'Home',
        activePage: null,
    },
    signals: {
        homeRouted: [
            set(state`app.activePage`, 'Home'),
        ],
        moviesRouted: [
            set(state`app.activePage`, 'Movies'),
        ],
        tvShowsRouted: [
            set(state`app.activePage`, 'TvShows'),
        ],
        catchAllRouted: [
            set(state`app.activePage`, 'ErrorNotFound'),
        ]
    }
});
