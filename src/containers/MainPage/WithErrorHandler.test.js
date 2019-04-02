import 'jsdom-global/register';
import React from 'react';
import WithErrorHandler from './index';
import { shallow } from 'enzyme';

describe('WithErrorHandler', () => {
    let wrapper;
    beforeEach(()=>{
        jest.resetAllMocks();
    });

    it('is renders', () => {
        wrapper = shallow(<WithErrorHandler />)
        expect(wrapper).toMatchSnapshot();
    });
});