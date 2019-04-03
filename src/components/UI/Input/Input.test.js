import 'jsdom-global/register';
import React from 'react';
import { Input } from './index';
import { shallow } from 'enzyme';

describe('Input', () => {
    let wrapper;
    const defaultProps = {
        className: 'title',
        inputConfig: {},
        onChange() {},
    };

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<Input {...defaultProps} />)
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
});