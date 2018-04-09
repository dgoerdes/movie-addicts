import React from 'react';
import ReactDOM from 'react-dom';
import TvShows from './TvShows';

describe('TvShows', () => {

    it('renders without error', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TvShows />, div);
    });
});
