import React from 'react';
import ReactDOM from 'react-dom';
import ErrorNotFound from './ErrorNotFound';

describe('ErrorNotFound', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ErrorNotFound />, div);
    });
});
