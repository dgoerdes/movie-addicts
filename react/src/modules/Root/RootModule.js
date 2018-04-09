import { Module } from 'cerebral';
import http from '../../providers/http';
import RouterModule from '../Router/RouterModule';
import UserAgentModule from '../UserAgent/UserAgentModule';
import AppModule from '../App/AppModule';

/**
 * ROOT MODULE
 */
export default Module({
    state: {},
    signals: {},
    modules: {
        router: RouterModule,
        userAgent: UserAgentModule,
        app: AppModule,
    },
    providers: {
        http,
    },
    catch: []
});
