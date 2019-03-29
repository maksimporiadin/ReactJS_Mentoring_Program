import 'jsdom-global/register';
import React from 'react';

import { Logo } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('Logo', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<Logo  />);
        expect(wrapper).toHaveLength(1);
    });
});