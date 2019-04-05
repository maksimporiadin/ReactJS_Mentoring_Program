import 'jsdom-global/register';
import React from 'react';
import MoviePage from './MoviePage';
import { shallow } from 'enzyme';

describe('MoviePage', () => {
    let wrapper;
    beforeEach(()=>{
        const defaultProps = {
            match: {
                params : {
                    movieId: 12345
                }
            },
            movies: [],
            movie: {},
            isLoading: false,
            onGetMovie: jest.fn()
        };

        wrapper = shallow(<MoviePage { ...defaultProps }/>);
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('check uploadMovie ', () => {
        wrapper.instance().uploadMovie();
        expect(wrapper.instance().props.onGetMovie).toHaveBeenCalled();
    });
});