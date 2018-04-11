import React from 'react';
import ReactDOM from 'react-dom';
import Headline from './Headline';

describe('Headline', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Headline />, div);
    });
});
