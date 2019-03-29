import 'jsdom-global/register';
import React from 'react';

import { MovieDetails } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

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