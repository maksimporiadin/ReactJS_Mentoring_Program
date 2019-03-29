import 'jsdom-global/register';
import React from 'react';

import Movie from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Movie', () => {
    let wrapper;
    const defaultProps = {
        movie: {
            poster_path: 'https://movie.url',
            title: 'title',
            genres: ['genre1', 'genre2'],
            release_date: '2014_12_12',
            id: 124,
        }
    };

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<Movie {...defaultProps} />)
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
});