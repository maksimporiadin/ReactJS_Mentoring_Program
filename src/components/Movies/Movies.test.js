import 'jsdom-global/register';
import React from 'react';
import { Movies } from './index';
import { shallow } from 'enzyme';

describe('Movies', () => {
    let wrapper;
    const defaultProps = {
        movies: []
    };

    beforeEach(()=>{
        jest.resetAllMocks();
    });

    it('is renders without movies', () => {
        wrapper = shallow(<Movies {...defaultProps} />)
        expect(wrapper).toMatchSnapshot();
    });

    it('is renders without movies', () => {
        const props = {
            movies: [{id: 1, movie: {}}]
        };
        wrapper = shallow(<Movies {...props} />)
        expect(wrapper).toMatchSnapshot();
    });
});