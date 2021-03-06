import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@cerebral/react';
import controller from '../../controller';
import Movies from './Movies';

describe('Movies', () => {

    it('renders without error', () => {
        ReactDOM.render(
            <Container controller={controller} >
                <Movies />
            </Container>,
            document.createElement('div')
        );
    });
});
