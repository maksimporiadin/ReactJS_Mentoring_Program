import 'jsdom-global/register';
import React from 'react';
import { NoFilmsFound } from './index';
import { shallow } from 'enzyme';

describe('NoFilmsFound', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<NoFilmsFound  />);
        expect(wrapper).toMatchSnapshot();
    });
});