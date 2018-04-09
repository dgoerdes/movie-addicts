import Router from '@cerebral/router';
import routes from './routes';

const RouterModule = Router({
    // Define routes and point to signals
    routes,

    // Only react to hash urls
    onlyHash: false,

    // Set a base url, if your app lives on a subpath
    baseUrl: null,

    // Will allow none matching routes on same origin to run as normal
    allowEscape: false,

    // Will make the router not run the initial route
    preventAutostart: false
});

export default RouterModule;
