import 'jsdom-global/register';
import React from 'react';
import { InformPanel } from './index';
import { shallow } from 'enzyme';

describe('InformPanel', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<InformPanel  />);
        expect(wrapper).toMatchSnapshot();
    });
});