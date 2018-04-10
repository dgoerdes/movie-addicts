import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from '@cerebral/react';
import controller from '../../controller';
import { MovieTileConnected } from './MovieTile';

describe('MovieTile', () => {

    it('renders without error', () => {
        ReactDOM.render(
            <Container controller={controller} >
                <MovieTileConnected />
            </Container>,
            document.createElement('div')
        );
    });
});
