import 'jsdom-global/register';
import React from 'react';
import WithErrorHandler from './index';
import { shallow } from 'enzyme';

describe('WithErrorHandler', () => {
    let wrapper;
    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<WithErrorHandler />)
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('errorConfirmedHandler method test', function () {
        wrapper.setState({ error : true });

        wrapper.instance().errorConfirmedHandler();
        expect(wrapper.state('error')).toBe(null);
    });
});