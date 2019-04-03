import 'jsdom-global/register';
import React from 'react';
import { Footer } from './index';
import { shallow } from 'enzyme';

describe('Footer', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<Footer  />);
        console.log(wrapper)
        expect(wrapper).toMatchSnapshot();
    });
});