import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@cerebral/react';
import Shell from './containers/Shell/Shell';
import controller from './controller';
import registerServiceWorker from './registerServiceWorker';
import './styles/global.scss';

ReactDOM.render(
    <Container controller={controller} >
        <Shell />
    </Container>,
    document.getElementById('root')
);

registerServiceWorker();
