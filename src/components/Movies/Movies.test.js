import 'jsdom-global/register';
import React from 'react';

import { Movies } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

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