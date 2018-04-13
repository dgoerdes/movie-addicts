import { state } from 'cerebral/tags';
import { set } from 'cerebral/operators';

/*
 * ROUTE PAGE FACTORY
 */
const routePageFactory = ({ pageName, beforeHook }) => {
    const routeSequence = [];
    if (!pageName) return routeSequence;

    routeSequence.push(set(state`app.transitioning`, true));
    routeSequence.push(() => { window.scrollTo(0, 0); });
    if (beforeHook) routeSequence.push(beforeHook);
    routeSequence.push(set(state`app.activePage`, pageName),);
    routeSequence.push(set(state`app.transitioning`, false));

    return routeSequence;
};

export default routePageFactory;
