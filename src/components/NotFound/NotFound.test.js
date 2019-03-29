import 'jsdom-global/register';
import React from 'react';

import { NotFound } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('NotFound', () => {
    let wrapper;

    beforeEach(()=>{
        jest.resetAllMocks();
        wrapper = shallow(<NotFound />);
    });

    it('is renders', () => {
        expect(wrapper).toMatchSnapshot();
    });
});