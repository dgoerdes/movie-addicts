import React from 'react';
import ReactDOM from 'react-dom';
import Image from './Image';

describe('Image', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Image />, div);
    });
});
