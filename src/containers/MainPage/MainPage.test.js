import 'jsdom-global/register';
import React from 'react';
import MainPage from './MainPage';
import api from '../../api';
import { shallow } from 'enzyme';

describe('MainPage', () => {
    let wrapper;

    beforeEach(()=>{
        const defaultProps = {
            loading: false,
            movies: [],
            total: 0,
            searchBy: '',
            sortBy: '',
            limit: 10,
            onGetMovies: jest.fn(),
            onMoviesChangeSearch: jest.fn(),
            onMoviesChangeSort: jest.fn(),
            onSortingMovies: jest.fn(),
        };

        wrapper = shallow(<MainPage { ...defaultProps } />);
    });

    it('handlerSetFilter method test', function () {
        const MockEventValue = { target: { value: 'rating'} };

        wrapper.instance().handlerSetFilter(MockEventValue);
        expect(wrapper.state('inputValue')).toBe('rating');
    });

    it('handlerSetSearchBy method test', function () {
        const MockEventValue = { target: { value: 'title'} };

        wrapper.instance().handlerSetSearchBy(MockEventValue);
        expect(wrapper.instance().props.onMoviesChangeSearch).toHaveBeenCalledWith('title');

    });

    it('handlerSetSortBy method test', function () {
        const MockEventValue = { target: { value: 'genre'} };

        wrapper.instance().handlerSetSortBy(MockEventValue);
        expect(wrapper.instance().props.onMoviesChangeSort).toHaveBeenCalledWith('genre');
    });

    it('handlerSubmit method test', function () {
        const MockEventValue = { preventDefault: () => {} };
        wrapper.instance().getMovies = jest.fn();
        wrapper.instance().handlerSubmit(MockEventValue);

        expect(wrapper.instance().getMovies).toHaveBeenCalled();
    });

    it('getMovies method test', function () {
        const moviesData = {
            params: {
                search: '',
                searchBy: '',
                limit: 10
            }
        };

        wrapper.instance().getMovies();
        expect(wrapper.instance().props.onGetMovies).toHaveBeenCalledWith(moviesData);
    });
});