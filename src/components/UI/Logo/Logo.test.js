import 'jsdom-global/register';
import React from 'react';
import { Logo } from './index';
import { shallow } from 'enzyme';

describe('Logo', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<Logo  />);
        expect(wrapper).toMatchSnapshot();
    });
});