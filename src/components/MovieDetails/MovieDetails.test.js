import 'jsdom-global/register';
import React from 'react';
import { MovieDetails } from './index';
import { shallow } from 'enzyme';

describe('MovieDetails', () => {
    let wrapper;
    const defaultProps = {
        movie: {
            poster_path: 'https://movie.url',
            title: 'title',
            tagline: 'This good movie',
            release_date: '2014_12_12',
            runtime: 124,
            overview: 'Nice movie'
        }
    };

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<MovieDetails {...defaultProps} />)
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
});