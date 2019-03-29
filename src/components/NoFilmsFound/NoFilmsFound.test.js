import 'jsdom-global/register';
import React from 'react';

import { NoFilmsFound } from './index';

import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

configure({adapter: new Adapter()});

describe('NoFilmsFound', () => {
    let wrapper;

    it('is renders', () => {
        wrapper = shallow(<NoFilmsFound  />);
        expect(wrapper).toHaveLength(1);
    });
});