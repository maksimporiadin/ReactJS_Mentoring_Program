import 'jsdom-global/register';
import React from 'react';

import { FilterHeader } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('FilterHeader', () => {
    let wrapper;
    const defaultProps = {
        searchBy: 'title',
        inputValue: 'X-Men',
        onFilterChange() {},
        onChangeSearchBy() {},
        onSubmitRequest() {}
    };

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<FilterHeader {...defaultProps} />)
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
});