import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

describe('Home', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Home />, div);
    });
});
