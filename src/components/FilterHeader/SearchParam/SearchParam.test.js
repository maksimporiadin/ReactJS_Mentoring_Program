import 'jsdom-global/register';
import React from 'react';

import SearchParam from './index';
import { shallow } from 'enzyme';

describe('SearchParam', () => {
    let wrapper;
    const defaultProps = {
        searchBy() {},
        onChange() {}
    };

    it('is renders', () => {
        wrapper = shallow(<SearchParam {...defaultProps} />)
        expect(wrapper).toMatchSnapshot();
    });
});