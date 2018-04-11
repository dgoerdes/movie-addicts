import React from 'react';
import ReactDOM from 'react-dom';
import Paragraph from './Paragraph';

describe('Paragraph', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Paragraph />, div);
    });
});
