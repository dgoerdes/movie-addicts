import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './Navigation';

describe('Navigation', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Navigation />, div);
    });
});
