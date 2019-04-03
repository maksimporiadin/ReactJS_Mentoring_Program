import 'jsdom-global/register';
import React from 'react';

import { SortBy } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('SortBy', () => {
    let wrapper;
    const defaultProps = {
        onChange() {},
    };

    beforeEach(()=>{
        jest.resetAllMocks();
    });

    it('is renders with release_date', () => {
        const props = {
            sortBy: 'release_date'
        };

        wrapper = shallow(<SortBy {...defaultProps} {...props} />)
        expect(wrapper).toMatchSnapshot();
    });

    it('is renders with vote_average', () => {
        const props = {
            sortBy: 'vote_average'
        }

        wrapper = shallow(<SortBy {...defaultProps} {...props} />)
        expect(wrapper).toMatchSnapshot();
    });
});