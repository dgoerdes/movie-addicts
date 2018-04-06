import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@cerebral/react';
import controller from '../../controller';
import Shell from './Shell';

describe('Shell', () => {

    it('renders without crashing', () => {
        ReactDOM.render(
            <Container controller={controller} >
                <Shell />
            </Container>,
            document.createElement('div')
        );
    });
});
