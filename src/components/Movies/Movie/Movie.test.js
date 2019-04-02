import 'jsdom-global/register';
import React from 'react';
import Movie from './index';
import { shallow} from 'enzyme';

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