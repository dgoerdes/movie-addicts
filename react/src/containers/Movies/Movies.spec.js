import React from 'react';
import ReactDOM from 'react-dom';
import Movies from './Movies';

describe('Movies', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Movies />, div);
    });
});
