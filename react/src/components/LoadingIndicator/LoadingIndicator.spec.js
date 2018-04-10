import React from 'react';
import ReactDOM from 'react-dom';
import LoadingIndicator from './LoadingIndicator';

describe('LoadingIndicator', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<LoadingIndicator />, div);
    });
});
