import { state, props } from 'cerebral/tags';
import { set, when } from 'cerebral/operators';
import requestTmdb from '../../App/actions/requestTmdbAction';


/*
 * INIT MOVIES SIGNAL
 */
export default [
    set(state`movies.status`, 'loading'),
    set(props`request`, {
        method: 'get',
        endpoint: '/movie/upcoming',
    }),
    requestTmdb,
    when(props`response.isError`),
    {
        true: [
            set(state`movies.status`, 'error'),
        ],
        false: [
            set(state`movies.upcoming`, props`response.result`),
            set(state`movies.status`, 'done'),
        ],
    },
];
