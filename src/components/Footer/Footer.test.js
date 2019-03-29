import 'jsdom-global/register';
import React from 'react';

import { Footer } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Footer', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<Footer  />);
        expect(wrapper).toHaveLength(1);
    });
});