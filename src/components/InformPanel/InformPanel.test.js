import 'jsdom-global/register';
import React from 'react';

import { InformPanel } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('InformPanel', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<InformPanel  />);
        expect(wrapper).toHaveLength(1);
    });
});