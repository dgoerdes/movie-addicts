import routePage from './routePageFactory';


describe('routePageFactory', () => {

    it('should return a sequence array', () => {
        expect(routePage({ pageName: 'Home' })).toBeInstanceOf(Array);
    });
});
