import 'jsdom-global/register';
import React from 'react';

import MainPage from './MainPage';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('MainPage', () => {
    let wrapper;

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<MainPage />)
    });

    it('handlerSetFilter method test', function () {
        const MockEventValue = { target: { value: 'rating'} };

        wrapper.instance().handlerSetFilter(MockEventValue);
        expect(wrapper.state('inputValue')).toBe('rating');
    });

    it('handlerSetSearchBy method test', function () {
        const MockEventValue = { target: { value: 'title'} };

        wrapper.instance().handlerSetSearchBy(MockEventValue);
        expect(wrapper.state('searchBy')).toBe('title');
    });

    it('handlerSetSortBy method test', function () {
        const MockEventValue = { target: { value: 'genre'} };

        wrapper.instance().handlerSetSortBy(MockEventValue);
        expect(wrapper.state('sortBy')).toBe('genre');
    });

    it('sortingMovies method test', function () {
        const MockMovies = [{ raiting: 1 },{ raiting: 2 }];

        wrapper.setState({ movies: MockMovies, sortBy: 'raiting'});
        wrapper.instance().sortingMovies();
        expect(wrapper.state('movies')[0].raiting).toBe(2);
    });

    it('handlerSubmit method test', function () {
        const MockEventValue = { preventDefault: () => {} };

        wrapper.instance().handlerSubmit(MockEventValue);
        expect(wrapper.state('isLoading')).toBe(true);
    });

});