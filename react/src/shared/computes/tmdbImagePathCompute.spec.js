import tmdbImagePathCompute from './tmdbImagePathCompute';

describe('tmdbImagePathCompute', () => {

    it('tmdbImagePathCompute is a computed with args and value', () => {
        expect(tmdbImagePathCompute).toHaveProperty('args');
        expect(tmdbImagePathCompute).toHaveProperty('value');
    });
});
