import { state, props } from 'cerebral/tags';
import { set, when } from 'cerebral/operators';
import requestTmdb from '../../App/actions/requestTmdbAction';

/**
 * INIT SIGNAL
 */
export default [
    set(props`request`, {
        method: 'get',
        endpoint: '/configuration',
    }),
    requestTmdb,
    when(props`response.isError`),
    {
        true: [],
        false: [
            set(state`app.tmdbConfig`, props`response.result`),
        ],
    },
];
