import 'jsdom-global/register';
import React from 'react';

import Header from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Header', () => {
    let wrapper;

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<Header />)
    });

    it('is renders', () => {
        expect(wrapper).toHaveLength(1);
    });

    it('HandlerOnClick test', () => {
        wrapper.instance().HandlerOnClick();
        expect(wrapper.state('isClicked')).toBe(true);
    });
});