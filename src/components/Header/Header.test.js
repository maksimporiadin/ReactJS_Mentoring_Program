import 'jsdom-global/register';
import React from 'react';
import Header from './index';
import { shallow } from 'enzyme';

describe('Header', () => {
    let wrapper;

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<Header />)
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('HandlerOnClick test', () => {
        wrapper.instance().HandlerOnClick();
        expect(wrapper.state('isClicked')).toBe(true);
    });
});