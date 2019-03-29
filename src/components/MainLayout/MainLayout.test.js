import 'jsdom-global/register';
import React from 'react';

import { MainLayout } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('MainLayout', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<MainLayout  />);
        expect(wrapper).toHaveLength(1);
    });
});