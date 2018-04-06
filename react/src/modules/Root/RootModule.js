import { Module } from 'cerebral';
import http from '../../providers/http';
import AppModule from '../App/AppModule';
import UserAgentModule from '../UserAgent/UserAgentModule';

/**
 * ROOT MODULE
 */
export default Module({
    state: {},
    signals: {},
    modules: {
        app: AppModule,
        userAgent: UserAgentModule,
    },
    providers: {
        http,
    },
    catch: []
});
