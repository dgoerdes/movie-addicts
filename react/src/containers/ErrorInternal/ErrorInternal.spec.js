import React from 'react';
import ReactDOM from 'react-dom';
import ErrorInternal from './ErrorInternal';

describe('ErrorInternal', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<ErrorInternal />, div);
    });
});
