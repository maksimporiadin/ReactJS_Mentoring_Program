import 'jsdom-global/register';
import React from 'react';
import { MainLayout } from './index';
import { shallow } from 'enzyme';

describe('MainLayout', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<MainLayout  />);
        expect(wrapper).toMatchSnapshot();
    });
});