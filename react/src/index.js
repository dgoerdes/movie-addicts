import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@cerebral/react';
import registerServiceWorker from './registerServiceWorker';
import Shell from './containers/Shell/Shell';
import controller from './controller';
import './styles/global.scss';

const initAppSignal = controller.getSignal('app.initSignal');

if (initAppSignal) {
    initAppSignal();
}

ReactDOM.render(
    <Container controller={controller}>
        <Shell />
    </Container>,
    document.getElementById('root')
);

registerServiceWorker();
