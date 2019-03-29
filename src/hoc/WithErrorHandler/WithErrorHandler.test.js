import 'jsdom-global/register';
import React from 'react';

import WithErrorHandler from './WithErrorHandler';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('WithErrorHandler', () => {
    let wrapper;
    beforeEach(()=>{
        jest.resetAllMocks();
    });

    it('is renders', () => {
        wrapper = shallow(<WithErrorHandler />)
        expect(wrapper).toHaveLength(1);
    });
});