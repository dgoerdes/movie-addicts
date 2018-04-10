import { Module } from 'cerebral';
import { set } from 'cerebral/operators';
import { state } from 'cerebral/tags';
import initMoviesSignal from '../Movies/signals/initMoviesSignal';
import initSignal from './signals/initSignal';

/*
 * APP MODULE
 */
export default Module({
    state: {
        requestedRoute: 'Home',
        activePage: null,
    },
    signals: {
        initSignal,
        homeRouted: [
            set(state`app.activePage`, 'Home'),
        ],
        moviesRouted: [
            initMoviesSignal,
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
